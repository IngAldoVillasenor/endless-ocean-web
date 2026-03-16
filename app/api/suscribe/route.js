import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // 1. Recibimos los datos que envía el frontend
    const body = await request.json();
    const { email, captchaValue } = body;

    if (!email || !captchaValue) {
      return NextResponse.json(
        { error: 'Faltan datos requeridos' },
        { status: 400 }
      );
    }

    // 2. Le preguntamos a Google si el token del reCAPTCHA es válido
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`;
    
    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaData = await recaptchaRes.json();

    // 3. Validamos la respuesta de Google
    if (!recaptchaData.success) {
      console.error('Fallo en reCAPTCHA:', recaptchaData['error-codes']);
      return NextResponse.json(
        { error: 'Validación de reCAPTCHA fallida. ¿Eres un robot?' },
        { status: 400 }
      );
    }

    // 4. ¡Éxito! El usuario es humano. 
    // AQUÍ es donde en el futuro guardarás el correo en tu base de datos (Supabase) 
    // o lo enviarás a tu servicio de Mailing (Resend, Mailchimp).
    console.log('✅ Nuevo suscriptor validado:', email);

    // Respondemos al frontend que todo salió bien
    return NextResponse.json(
      { message: 'Suscripción exitosa y validada' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en el servidor:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}