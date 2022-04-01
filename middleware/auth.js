export default function (context) {
  console.log('[Middleware] Auth')
  console.log('isAuthenticated', context.store.getters.isAuthenticated)
  if (!context.store.getters.isAuthenticated) {
    return context.redirect('/admin/auth')
  }
}
