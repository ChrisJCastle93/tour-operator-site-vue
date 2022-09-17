module.exports = (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>, next: NextFunction): Promise<void> => {
  // if an already logged in user tries to access the login page it
  // redirects the user to the home page
  if (req.session.user) {
    return res.status(401).json({
      errorMessage: "You should not be logged in to make this request",
    });
  }
  next();
};