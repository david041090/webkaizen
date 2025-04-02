const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Configuración del transportador de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jd041090@gmail.com',
    pass: 'icfx laav visj nqpb'
  }
});

router.post('/send-application', upload.single('cv'), async (req, res) => {
  try {
    const formData = JSON.parse(req.body.data);

    // Configurar las opciones del correo
    const mailOptions = {
      from: 'jd041090@gmail.com',
      to: 'jd041090@gmail.com',
      subject: `Nueva Postulación - ${formData.nombre} ${formData.apellido}`,
      html: `
        <h2>Nueva Postulación Recibida</h2>
        
        <h3>Información Personal</h3>
        <p><strong>Nombre:</strong> ${formData.nombre} ${formData.apellido}</p>
        <p><strong>DNI:</strong> ${formData.dni}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Teléfono:</strong> ${formData.telefono}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${formData.fechaNacimiento}</p>

        <h3>Formación Académica</h3>
        <p><strong>Nivel de Estudios:</strong> ${formData.nivelEstudio}</p>
        <p><strong>Institución Educativa:</strong> ${formData.institucionEducativa || 'No especificado'}</p>
        <p><strong>Título/Carrera:</strong> ${formData.tituloCarrera || 'No especificado'}</p>
        <p><strong>Año de Graduación:</strong> ${formData.anoGraduacion || 'No especificado'}</p>

        <h3>Habilidades y Experiencia</h3>
        <p><strong>Área de Interés:</strong> ${formData.area}</p>
        <p><strong>Años de Experiencia:</strong> ${formData.anosExperiencia}</p>
        <p><strong>Habilidades Principales:</strong></p>
        <p>${formData.habilidadesPrincipales}</p>

        <h3>Información Adicional</h3>
        <p><strong>Disponibilidad:</strong> ${formData.disponibilidad}</p>
        <p><strong>Expectativa Salarial:</strong> S/ ${formData.expectativaSalarial}</p>

        <h3>Mensaje Adicional</h3>
        <p>${formData.mensaje || 'No se proporcionó mensaje'}</p>
      `,
      attachments: []
    };

    // Agregar el CV si existe
    if (req.file) {
      mailOptions.attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: 'application/pdf'
      });
    }

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Postulación enviada correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ error: 'Error al enviar la postulación: ' + error.message });
  }
});

module.exports = router; 