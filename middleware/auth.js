export default function (context) { 
  console.log('[Middleware] Auth')   
  if (!context.store.getters.isAuthenticated) {
    return context.redirect('/admin/auth')
  }
}
