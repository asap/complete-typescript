import {
  Router,
  Request,
  Response,
  NextFunction,
} from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction) : void{
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Access Denied');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" placeholder="user@example.com"/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" placeholder="***********"/>
      </div>
      
      <button>Login</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && validLogin(email, password)) {
    req.session = { loggedIn: true };

    res.redirect('/');
  } else {
    res.send('You must provide valid credentials');
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;  
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('This is a secret place');
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You're logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>Please log in</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

const validLogin = (email: string, password: string) =>
  (email === 'user@example.com' && password === 'secret');

export { router };
