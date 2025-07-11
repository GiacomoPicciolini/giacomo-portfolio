import { withAuth } from 'next-auth/middleware'

export default withAuth({
    secret: 'pilatus',
})

export const config = { matcher: ['/protected/:path*'] }
