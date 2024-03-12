  * Redirect function
  
  if (currentUser && !currentUser?.isAdmin) {
    redirect("/");
  }


--------------------