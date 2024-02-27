import * as nodemailer from 'nodemailer';

export async function sendRecoverAccountEmail(name: string, token: string, email: string){
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Recupera tu cuenta',
    html: `<!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta https-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
                  <style>
                    body {
                      background-color: #f5f5f5;
                      font-family: Arial, Helvetica, sans-serif;
                      line-height: 1.5;
                      text-align: center;
                    }
                    .titulo{
                      text-align: center;
                      max-width: 500px;
                      width: 90%;
                      margin: 20px auto 0 auto;
                      padding: 20px;
                      background-color: rgb(3, 57, 103);
                      border-radius: 15px 15px 0 0;
                      box-shadow: 0 -2px 7px 0 rgba(166,166,166,1);
                    }
                    .contenedor{
                      text-align: center;
                      max-width: 500px;
                      width: 90%;
                      margin: 0 auto;
                      padding: 20px;
                      border-radius: 0 0 15px 15px;
                      background-color: white;
                      box-shadow: 0 2px 7px 0 rgba(166,166,166,1);
                    }
                    h1 {
                      width: 100%;
                      color: #fff;
                      margin: 0;
                    }
                    p{
                      color: #333;
                      font-size: 18px;
                    }
            
                    .codigo {
                      text-align: center;
                      width: 140px;
                      background-color: rgb(3, 57, 103);
                      color: white;
                      padding: 10px;
                      border-radius: 5px;
                      font-size: 20px;
                      font-weight: bold;
                      margin: 0 auto;
                    }
                  </style>
                </head>
                <body>
                  <div class="titulo">
                      <h1>Olvidaste tu contraseña</h1>
                  </div>
                    <div class="contenedor">
                      <p>
                        Hola, <strong>${ name }</strong> se ha solicitado el cambio de contraseña para tu cuenta 
                        en Grupo sosa para poder restablecer se requiere únicamente del código de recuperación que se te otorgara
                        por medio de este correo.
                      </p>
                      <p>
                        Tu código de para la recuperación de tu cuenta es el siguiente:
                      </p>
                      <p class="contenedor-codigo">
                        <div class="codigo">${ token.split('').join(' ') }</div>
                      </p>
                      <p>
                        Te recomendamos no compartir este código con nadie. <br>
                        Si no has solicitado el cambio de contraseña, por favor ignora este correo. <br>
                      </p>
                    </div>
                </body>n
              </html>`
  };

  console.log('Enviando correo...');

  await transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
}
