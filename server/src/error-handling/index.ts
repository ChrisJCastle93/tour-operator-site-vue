import { Request, Response, NextFunction } from "express";

module.exports = (app) => {
  app.use((req: Request, res: Response, next: NextFunction): void => {
    res.status(404).json({ errorMessage: "This route does not exist" });
  });

  app.use((err, req: Request, res: Response, next) => {
    console.error("ERROR", req.method, req.path, err);
    if (!res.headersSent) {
      res.status(500).json({
        errorMessage: "Internal server error. Check the server console",
      });
    }
  });
};
