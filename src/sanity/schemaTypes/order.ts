
export default {
    name:"order",
    type:"document",
    title:"Order",
    fields:[
        {
            name:"first_name",
            title:"First Name",
            type:"string"
        },
        {
            name:"last_name",
            title:"Last Name",
            type:"string"
        },
        {
            name:"address",
            title:"Address",
            type:"string"
        },
        {
            name:"email",
            title:"Email",
            type:"string"
        },
        {
            name:"city",
            title:"City",
            type:"string"
        },
        {
            name:"zipCode",
            title:"Zip",
            type:"string"
        },
        {
            name:"phoneNumber",
            title:"Phone Number",
            type:"string"
        },
        {
            name:"CartItems",
            title:"Cart Items",
            type:"array",
            of:[
                { type:"reference", to :{type:"products"}

               }

              ]
             },
                 {name:"total",
                   title:"Total",
                 type:"number"
                },

                {
                    name:"status",
                    title:"Status",
                    type:"string",
                    options:{
                        list:[
                            {title:"Pending",value:"pending"},
                            {title:"Success",value:"success"},
                            {title:"Dispatch",value:"dispatch"}
                        ],
                         layout:"radio" //optionally, change to "dropdown" if you prefer a dropdown
                    },
                    initialValue : "pending" //default value
                },

               

    ]}