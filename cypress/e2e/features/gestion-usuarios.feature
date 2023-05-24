# language: es
@Regression
Característica: Gestionar usuarios

    Administrar el registro de usuarios en el sitio web ...

Antecedentes: 
  Dado que estoy en el sito web de registro

@registrarUsuario
Esquema del escenario: Registar un usuario en el sito web
  Cuando realizo el registro de un nuevo usuario
    |name  |email  |password  |
    |<name>|<email>|<password>|
  Entonces valido que el registro fue exitoso
    |validationName  |validationEmail  |
    |<validationName>|<validationEmail>|
  Ejemplos:
  |name            |email             |password |validationName  |validationEmail   |
  |Amir Alexander  |ing@hs.com        |123456677|Amir Alexander  |ing@hs.com        |
  |Carlos Murillo  |cmurillo@gmail.com|123456677|Carlos Murillo  |cmurillo@gmail.com|
  |Antonella Florez|anto@yahoo.com    |123456677|Antonella Florez|anto@yahoo.com    |

@EliminarUsuario
Escenario: Eliminar un registro
    Cuando realizo el registro de un nuevo usuario
        |name   |email         |password  |
        |Amir CR|inging@nsa.com|123456789 |
    Y luego lo elimino de los registros
    Entonces valido que el usuario se elimino correctamenta
        |validationName  |
        |Amir CR         |

@ValidarCamposVacios
Escenario: Validar mensajes de error del formulario de registro
    Cuando intento registrar un usuario con los campos vacios
    Entonces valido los mensajes de error de cada campo
        |validationName             |validationEmail              |validationPassword          |
        |O campo Nome é obrigatório.|O campo E-mail é obrigatório.|O campo Senha é obrigatório.|

@ValidarNombreIncompleto
Escenario: Validar el mensaje de error del nombre incompleto
    Cuando ingreso los datos y el primer nombre
        |name     |email             |password|
        |Joao     |email@exemplo.com |12345678|
    Y intento realizar el registro
    Entonces valido el mensaje de error del nombre incomleto
        |messageValidation                  |
        |Por favor, insira um nome completo.|

@ValidarEmailInvalido
Escenario: Validar el mensaje de error de un email invalido
    Cuando ingreso un email invalido
        |name      |email             |password|
        |Joao Silva|email.exemplo.com |12345678|
    Y intento realizar el registro
    Entonces valido el mensaje de email invalido
        |messageValidation                  |
        |Por favor, insira um e-mail válido.|

@ValidarContraseñaInvalida
Escenario: Validar el mensaje de error de una contraseña invalida
    Cuando ingreso una contraseña invalida
        |name      |email             |password|
        |Joao Silva|email@exemplo.com |1234    |
    Y intento realizar el registro
    Entonces valido el mensaje de la contraseña invalida
        |messageValidation                         |
        |A senha deve conter ao menos 8 caracteres.|