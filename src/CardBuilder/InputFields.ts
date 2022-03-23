interface Section{
    sectionTitle:string,
    inputs:
        {
            label:string,
            mapped:string,
            type?:string
        }[]
}

export const inputFields:Section[] = [
    {
        sectionTitle:"PERSONAL DETAILS",
        inputs:[
          {
              label:"GIVEN NAME",
              mapped:"givenName"
            },
            {
                label:"SURNAME",
                mapped:"surname"
            },
            {
                label:"EMAIL",
                mapped:"email"
            },
            {
                label:"PHONE",
                mapped:"phone"
            }
        ]
    },
    {
        sectionTitle:"ADDRESS",
        inputs:[
          {
              label:"HOUSE NAME OR #",
              mapped:"house"
            },
            {
                label:"STREET",
                mapped:"street"
            },
            {
                label:"SUBURB",
                mapped:"suburb"
            },
            {
                label:"STATE",
                mapped:"state"
            },
            {
                label:"POSTCODE",
                mapped:"postCode"
            },
            {
                label:"COUNTRY",
                mapped:"country"
            }
        ]
    }
]