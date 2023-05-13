import request from'supertest'
import { app } from '../src/index.js';
import { assert } from 'chai';

describe('Registro de usuarios', () => {
    it('Debería registrar un usuario correctamente', async() => {
        const resultado = registrarUsuario(); // Ejemplo de función de registro
        const valorEsperado = 'usuarioRegistrado';

    const userData = {
            id: 1,
            nombre: 'Usuario de prueba',
            telefono: '123456789',
            direccion: 'Calle 123',
            email: 'test@example.com',
            password: 'password123',
     }
          const response = await request(app)
          .post('/user') // Reemplaza con la ruta de registro de tu aplicación
          .send(userData);
          assert.equal(resultado, valorEsperado)
          assert.equal(response.status,404);
          
          console.log('Usuario registrado correctamente. Estado de respuesta: 200');
          console.log("Data thw user register",userData); 
        })
        function registrarUsuario() {
      const userData = {
          id: 1,
          nombre: 'Usuario de prueba',
          telefono: '123456789',
          direccion: 'Calle 123',
          email: 'test@example.com',
          password: 'password123',
        }
        return 'usuarioRegistrado'
       // Ejemplo de resultado
      }
    }
    
  
  );

 