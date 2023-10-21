import { generateClasses } from '@formkit/themes'

const config = {
    config: {
        clsses: generateClasses({
            global: {
                wrapper: 'space-y-2 mb-3',
                message: 'bg-red-500 text-white text-center text-sm font-bold uppercase p-2 my-5'
            },
            submit: {

            }
        })
    }
}

export default config 