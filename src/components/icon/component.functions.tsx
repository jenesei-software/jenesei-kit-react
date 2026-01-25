import { Icon } from './component';
import { getIconComponentsProps } from './component.types';

export function getIconComponents(props: getIconComponentsProps) {
  return (props.icons ?? [])
    ?.filter((icon) => !icon.isHidden)
    ?.map((icon, index) => (
      <Icon key={`${icon.type}-${icon.name}-${index}`} size={icon?.size ?? props.size} {...icon} />
    ));
}
