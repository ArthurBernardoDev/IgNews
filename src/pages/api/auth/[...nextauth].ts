import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({

    providers: [
        Providers.GitHub({
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            scope: 'read:user'
        }),
    ],
})
