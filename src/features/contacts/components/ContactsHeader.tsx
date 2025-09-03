
import { HiOutlineRectangleGroup, HiOutlineTableCells } from "react-icons/hi2";
import { ButtonLineGroup } from "../../../components/ui/Button";

interface ContactsHeaderProps<T> {
  defaultViewMode: T,
  onViewChange: (view: T) => void
}

export function ContactsHeader<T>({ onViewChange, defaultViewMode }: ContactsHeaderProps<T>) {

  const options = [
    {
      key: 'table',
      label: '',
      icon: <HiOutlineTableCells size={22} />
    },
    {
      key: 'card',
      label: '',
      icon: <HiOutlineRectangleGroup size={22} />
    }
  ]

  return <div className="grid grid-cols-2 gap-6 p-2 mb-4">
    <div>
      First one, ressults of the query
    </div>
    <div className="text-right">
      View <ButtonLineGroup controlledActiveKey={defaultViewMode as string} items={options} onChange={(view: string) => onViewChange(view as any)} />
    </div>
  </div>
}