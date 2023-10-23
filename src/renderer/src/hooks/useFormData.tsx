import { Note } from "@renderer/features/noteReducer";
import { ChangeEvent, useState } from "react";

export function useFormData(initialValue: Note) {
    const [data, setData] = useState(initialValue)
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 'px'
    }
    return {data, setData, handleChange}
}
