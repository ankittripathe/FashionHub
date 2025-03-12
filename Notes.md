# Understanding Relative vs. Absolute Paths in React Router
# (1) Relative Path (./product/${props.id})
A relative path means it will be resolved based on the current route.
If you're on /mens, it would try to navigate to /mens/product/${props.id} instead of /product/${props.id}, which is incorrect in your case.

# (2) Absolute Path (/product/${props.id})
An absolute path always starts from the root (/).
No matter where the user is (e.g., /mens, /womens, /kids), it will always navigate to /product/${props.id}, which is the correct URL structure for your app.