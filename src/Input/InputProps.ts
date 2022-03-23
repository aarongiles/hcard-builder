export interface InputProps{
    label: string,
    value: string,
    onChange: (changed)=>void,
    type?: "text"|"number",
    id?:string
}

export interface InputSectionProps{
    title:string,
    children: JSX.Element
}