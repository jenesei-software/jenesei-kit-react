import { LIST_LANGUAGE } from '@local/cores/consts';

import moment from 'moment';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { Select } from './component';
import { ISelectLanguage, ISelectLanguageOption, ISelectMonth, ISelectMonths, ISelectYear } from './component.types';

export const SelectLanguage: FC<ISelectLanguage> = (props) => {
  const { value, onChange } = props;

  const option = LIST_LANGUAGE;

  const [viewOption] = useState<ISelectLanguageOption[]>(option);

  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) {
      onChange(null);
    } else {
      onChange(value[0].value.toString());
    }
  };
  const valueLocal = useMemo(() => {
    const findOption = option.find((e) => e.value === value);
    if (!findOption) return [];
    return [findOption];
  }, [value]);

  return (
    <Select<ISelectLanguageOption> {...props} option={viewOption} value={valueLocal} onChange={handleSelectChange} />
  );
};
export const SelectMonth: FC<ISelectMonth> = (props) => {
  const { value, onChange, dateMin, dateMax, monthsLocale, isShortLabel } = props;

  const year = moment(value).utc().year();

  const option = useMemo(() => {
    return monthsLocale.map((monthItem) => {
      const monthIndex = moment().month(monthItem.value).month();

      const monthMoment = moment.utc().year(year).month(monthIndex).startOf('month');
      const isDisabled =
        (dateMin && monthMoment.isBefore(moment.utc(dateMin), 'month')) ||
        (dateMax && monthMoment.isAfter(moment.utc(dateMax), 'month'));

      return {
        value: monthMoment.valueOf(),
        label: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        placeholder: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        search: `${monthItem.localeLong.toLowerCase()}, ${monthIndex + 1}`,
        isDisabled: !!isDisabled,
        monthValue: monthItem.value,
      };
    });
  }, [monthsLocale, year, dateMin, dateMax, isShortLabel]);

  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange(null);
    onChange(+value[0].value);
  };
  const valueLocal = useMemo(() => {
    const findOption = option.find((e) => e.value === value);
    if (!findOption) return [];
    return [findOption];
  }, [value, option]);

  return <Select<ISelectLanguageOption> {...props} option={option} value={valueLocal} onChange={handleSelectChange} />;
};
export const SelectMonths: FC<ISelectMonths> = (props) => {
  const { value, onChange, dateMin, dateMax, monthsLocale, isShortLabel } = props;

  const year = moment(value).utc().year();

  const option = useMemo(() => {
    return monthsLocale.map((monthItem) => {
      const monthIndex = moment().month(monthItem.value).month();

      const monthMoment = moment.utc().year(year).month(monthIndex).startOf('month');
      const isDisabled =
        (dateMin && monthMoment.isBefore(moment.utc(dateMin), 'month')) ||
        (dateMax && monthMoment.isAfter(moment.utc(dateMax), 'month'));

      return {
        value: monthMoment.valueOf(),
        label: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        placeholder: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        search: `${monthItem.localeLong.toLowerCase()}, ${monthIndex + 1}`,
        isDisabled: !!isDisabled,
        monthValue: monthItem.value,
      };
    });
  }, [monthsLocale, year, dateMin, dateMax, isShortLabel]);
  const [viewOption, setViewOption] = useState<ISelectLanguageOption[]>(option);

  useEffect(() => {
    setViewOption(option);
  }, [option]);
  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange([]);
    onChange(value.map((e) => +e.value));
  };
  const valueLocal = useMemo(() => {
    if (!value || value.length === 0) return [];
    return value.map((val) => option.find((opt) => opt.value === val)).filter(Boolean) as ISelectLanguageOption[];
  }, [value, option]);

  const [search, setSearch] = useState<string>('');
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearch(value);

      if (value === '') {
        setViewOption(option);
      } else {
        const filteredOptions = option.filter((option) =>
          Object.values(option).some((field) => field?.toString().toLowerCase().includes(value.toLowerCase())),
        );
        setViewOption(filteredOptions);
      }
    },
    [option],
  );
  return (
    <Select<ISelectLanguageOption>
      {...props}
      valueSearch={search}
      onChangeSearch={handleSearchChange}
      optionAllLength={option.length}
      option={viewOption}
      minViewDropdown={1}
      isMulti
      value={valueLocal}
      onChange={handleSelectChange}
      onChangeAll={(_value, isAll) => {
        if (isAll) {
          onChange(viewOption.map((e) => +e.value));
        } else {
          onChange([]);
        }
      }}
    />
  );
};
export const SelectYear: FC<ISelectYear> = (props) => {
  const { value, onChange, dateMin, dateMax, sortOrder = 'desc' } = props;

  const startYear = moment(dateMin).utc().year();
  const endYear = moment(dateMax).utc().year();

  const option = useMemo(() => {
    const yearArray = Array.from({ length: endYear - startYear + 1 }, (_, index) => {
      const year = startYear + index;
      return {
        value: moment().year(year).utc().startOf('year').valueOf(),
        label: moment().year(year).utc().format('YYYY'),
        placeholder: moment().year(year).utc().format('YYYY'),
        search: `${moment().year(year).utc().format('YYYY').toLowerCase()}`,
      };
    });

    return sortOrder === 'asc'
      ? yearArray.sort((a, b) => a.value - b.value)
      : yearArray.sort((a, b) => b.value - a.value);
  }, [endYear, startYear, sortOrder]);

  const handleSelectChange = (value: ISelectLanguageOption[]) => {
    if (value.length === 0) onChange(null);
    onChange(+value[0].value);
  };
  const valueLocal = useMemo(() => {
    const findOption = option.find((e) => e.value === value);
    if (!findOption) return [];
    return [findOption];
  }, [value, option]);

  return <Select<ISelectLanguageOption> {...props} option={option} value={valueLocal} onChange={handleSelectChange} />;
};
