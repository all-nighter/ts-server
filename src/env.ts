require('dotenv').config()
import env from 'env-var'

export const PORT: number = env.get('PORT').required().asPortNumber()
