import { Icon } from './component';
import { IGetIconComponentsProps } from './component.types';

export function getIconComponents(props: IGetIconComponentsProps) {
  return (props.icons ?? [])
    ?.filter((icon) => !icon.isHidden)
    ?.map((icon, index) => (
      <Icon key={`${icon.type}-${icon.name}-${index}`} size={icon?.size ?? props.size} {...icon} />
    ));
}
