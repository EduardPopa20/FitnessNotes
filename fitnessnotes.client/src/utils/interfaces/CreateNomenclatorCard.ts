import { Dispatch, SetStateAction } from "react"

interface CreateNomenclatorCardInterface {
    title: string,
    onSave: (() => void) | undefined,
    setIsOldData: Dispatch<SetStateAction<boolean>>,

}

export default CreateNomenclatorCardInterface