// !TODO - still need to check if auth is done via sessions or not
module.exports = (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response<ResBody>, next: NextFunction): Promise<void> => {
  // checks if the user is logged in when trying to access a specific page
  if (!req.session.user) {
    return res.status(403).json({ errorMessage: "You must be logged in to see this page" });
  }
  req.user = req.session.user;
  next();
};
