import {
  useDispatch,
  useSelector,
} from "react-redux"
import {
  deleteContact,
  selectContacts,
} from "../redux/contactsSlice"
import { selectFilterStr } from "../redux/filtersSlice"
import s from "./List.module.css"
import { ImPacman } from "react-icons/im"
import { FaPhoneAlt } from "react-icons/fa"

const List = () => {
  const contacts = useSelector(selectContacts)
  const filterStr = useSelector(selectFilterStr)
  const dispatch = useDispatch()

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(filterStr.toLowerCase().trim())
  )

  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={s.card}>
            <div className={s.info}>
              <div className={s.inInfo}>
                <ImPacman />
                <p>{contact.name}</p>
              </div>
              <div className={s.inInfo}>
                <FaPhoneAlt />
                <p>{contact.phone}</p>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  deleteContact(contact.id)
                )
              }
              className={s.btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
