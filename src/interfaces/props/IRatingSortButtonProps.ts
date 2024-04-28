import { TAscending } from "#interfaces/TAscending"

export default interface IRatingSortButtonProps {
    ascending: TAscending
    setAscending: React.Dispatch<React.SetStateAction<TAscending>>
}