import { useSelector } from "react-redux"
import { selectContacts } from "../redux/contactsSlice"
import { selectFilterStr } from "../redux/filtersSlice";

const List = () => {
    const filteredContacts = useSelector(selectFilterStr)

    return (
        <div>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={item.id}>
            
          </li>
))}
      </ul>
    </div>
    )
}
