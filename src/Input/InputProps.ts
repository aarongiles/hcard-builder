export interface InputProps{
    label: string,
    value: string,
    onChange: (changed)=>void,
    type?: "text"|"number"
}

export interface InputSectionProps{
    title:string,
    children: JSX.Element
}