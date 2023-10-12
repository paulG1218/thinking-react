let TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

  let globalId = 4

  const handlerFunctions = {

    getInvoices: (req, res) => {
        res.send(TEST_DATA)
    },

    addInvoice: (req, res) => {
        const {description} = req.body

        const newObj = {
            id: globalId,
            description: '',
            rate: 0,
            hours: 0
        }

        TEST_DATA.push(newObj)
            
        globalId ++

        res.send(newObj)

    },

    deleteInvoice: (req, res) => {
        const id = req.params.id

        TEST_DATA = TEST_DATA.filter((invoice) => invoice.id != id)

        res.send(TEST_DATA)
        
    },

    editInvoice: (req, res) => {

        const {id} = req.params
        const {description, rate, hours } = req.body

        const idx = TEST_DATA.findIndex(invoice => invoice.id == id)
        const invoiceItem = TEST_DATA[idx]
        invoiceItem.description= description
        console.log(id)
        console.log(description)
        invoiceItem.rate = +rate
        invoiceItem.hours = +hours

        res.send(invoiceItem)
    }

  }

  export default handlerFunctions