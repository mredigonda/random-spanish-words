var wordList = ['abajo', 'abierta', 'abierto', 'abogado', 'abre', 'abrigo', 'abrir', 'absolutamente', 'absoluto', 'abuela',
'abuelo', 'acaba', 'acabado', 'acabar', 'acabo', 'acaso', 'accidente', 'accion', 'aceptar', 'acerca',
'acto', 'actuar', 'acuerdas', 'acuerdo', 'adelante', 'ademas', 'adentro', 'adios', 'adonde', 'aeropuerto',
'afuera', 'agente', 'agradable', 'agradezco', 'agua', 'ahora', 'aire', 'alcalde', 'alegra', 'alegro',
'aleman', 'alemanes', 'alex', 'algo', 'alguien', 'algun', 'alguna', 'algunas', 'alguno', 'algunos',
'alla', 'alli', 'alma', 'alrededor', 'alta', 'alto', 'amable', 'amante', 'amas', 'ambos',
'america', 'americano', 'amiga', 'amigo', 'amigos', 'amor', 'anda', 'andar', 'angel', 'angeles',
'anillo', 'animal', 'animales', 'anna', 'anoche', 'ante', 'antes', 'apartamento', 'apenas', 'aprender',
'apuesto', 'aquel', 'aquella', 'aquellos', 'aqui', 'arbol', 'area', 'arma', 'armas', 'arreglar',
'arriba', 'arte', 'asesinato', 'asesino', 'asiento', 'aspecto', 'asunto', 'asuntos', 'ataque', 'atencion',
'atras', 'aunque', 'auto', 'autobus', 'avion', 'ayer', 'ayuda', 'ayudame', 'ayudar', 'ayudarme',
'ayudarte', 'ayude', 'azul', 'bailar', 'baile', 'baja', 'bajar', 'bajo', 'banco', 'banda',
'barco', 'base', 'basta', 'bastante', 'bastardo', 'basura', 'batalla', 'bebe', 'beber', 'bella',
'belleza', 'beso', 'bien', 'bienvenida', 'bienvenido', 'bienvenidos', 'bill', 'billy', 'blanca', 'blanco',
'bobby', 'boca', 'boda', 'bolsa', 'bomba', 'bonita', 'bonito', 'borracho', 'bosque', 'bote',
'botella', 'bravo', 'brazo', 'brazos', 'brillante', 'broma', 'bromeando', 'buen', 'buena', 'buenas',
'bueno', 'buenos', 'busca', 'buscando', 'buscar', 'busco', 'caballero', 'caballeros', 'caballo', 'caballos',
'cabello', 'cabeza', 'cabo', 'cabron', 'cada', 'caer', 'cafe', 'caja', 'caliente', 'california',
'callate', 'calle', 'calles', 'calma', 'calmate', 'calor', 'cama', 'camara', 'cambia', 'cambiado',
'cambiar', 'cambio', 'caminar', 'camino', 'camion', 'camisa', 'campo', 'cancion', 'cansada', 'cansado',
'cantar', 'capaz', 'capitan', 'cara', 'carajo', 'carcel', 'carga', 'cargo', 'carne', 'carrera',
'carretera', 'carro', 'carta', 'cartas', 'casa', 'casado', 'casarse', 'casas', 'casi', 'caso',
'castillo', 'causa', 'cayo', 'cena', 'cenar', 'central', 'centro', 'cerca', 'cerdo', 'cerebro',
'cerrado', 'cerrar', 'cerveza', 'charles', 'charlie', 'chica', 'chicas', 'chico', 'chicos', 'china',
'chris', 'cielo', 'cielos', 'cien', 'cierra', 'cierto', 'cinco', 'cine', 'cinta', 'cita',
'ciudad', 'claro', 'clase', 'clases', 'cliente', 'clientes', 'club', 'coche', 'cocina', 'codigo',
'coge', 'coger', 'cola', 'colegio', 'color', 'comandante', 'come', 'comenzar', 'comenzo', 'comer',
'comida', 'comienza', 'comienzo', 'como', 'completamente', 'completo', 'comprar', 'comprendo', 'comun', 'conducir',
'confianza', 'confiar', 'conmigo', 'conoce', 'conocer', 'conocerte', 'conoces', 'conoci', 'conocia', 'conocido',
'conozco', 'conseguir', 'consejo', 'contacto', 'contar', 'contento', 'contigo', 'continua', 'continuar', 'contra',
'contrario', 'contrato', 'control', 'conversacion', 'copa', 'corazon', 'coronel', 'corre', 'correcto', 'correr',
'corriendo', 'corte', 'cosa', 'cosas', 'costa', 'cree', 'creen', 'creer', 'creerlo', 'crees',
'crei', 'creia', 'creo', 'crimen', 'cual', 'cualquier', 'cualquiera', 'cuando', 'cuantas', 'cuanto',
'cuantos', 'cuarto', 'cuatro', 'cuchillo', 'cuello', 'cuenta', 'cuentas', 'cuento', 'cuerpo', 'cuesta',
'cuestion', 'cuidado', 'cuidar', 'culo', 'culpa', 'culpable', 'dado', 'dale', 'dama', 'damas',
'dame', 'dando', 'danny', 'dara', 'dare', 'darle', 'darme', 'darte', 'date', 'dave',
'david', 'debajo', 'debe', 'debemos', 'deben', 'deber', 'deberia', 'deberiamos', 'deberian', 'deberias',
'debes', 'debi', 'debia', 'debido', 'debio', 'debo', 'decia', 'decidido', 'decir', 'decirle',
'decirlo', 'decirme', 'decirte', 'decision', 'dedo', 'dedos', 'defensa', 'definitivamente', 'deja', 'dejado',
'dejalo', 'dejame', 'dejar', 'dejare', 'dejarlo', 'dejas', 'dejaste', 'deje', 'dejen', 'dejes',
'dejo', 'delante', 'demas', 'demasiado', 'demonio', 'demonios', 'dentro', 'departamento', 'depende', 'deprisa',
'derecha', 'derecho', 'desastre', 'descansar', 'descanso', 'desde', 'desea', 'deseo', 'despacio', 'despierta',
'despues', 'destino', 'detalles', 'detective', 'detente', 'detras', 'diablo', 'diablos', 'diario', 'dias',
'dice', 'dicen', 'dices', 'dicho', 'diciendo', 'dientes', 'dieron', 'diez', 'diferencia', 'diferente',
'diferentes', 'dificil', 'diga', 'digame', 'digamos', 'digas', 'digo', 'dije', 'dijeron', 'dijiste',
'dijo', 'dile', 'dime', 'dinero', 'dios', 'dire', 'direccion', 'directo', 'director', 'diria',
'disculpa', 'disculpe', 'disparar', 'distancia', 'diste', 'divertido', 'doble', 'doctor', 'dolares', 'dolor',
'domingo', 'donde', 'dormido', 'dormir', 'drogas', 'duda', 'duele', 'duerme', 'dulce', 'dura',
'durante', 'durmiendo', 'duro', 'echar', 'edad', 'eddie', 'edificio', 'efecto', 'ejemplo', 'ejercito',
'eleccion', 'ella', 'ellas', 'ello', 'ellos', 'embarazada', 'embargo', 'emergencia', 'empezar', 'empezo',
'empieza', 'empleo', 'empresa', 'enamorado', 'encanta', 'encantado', 'encantaria', 'encima', 'encontrado', 'encontramos',
'encontrar', 'encontraron', 'encontre', 'encontro', 'encuentra', 'encuentras', 'encuentro', 'enemigo', 'enemigos', 'energia',
'enferma', 'enfermedad', 'enfermo', 'enorme', 'enseguida', 'entender', 'entendido', 'entero', 'entiende', 'entiendes',
'entiendo', 'entonces', 'entra', 'entrada', 'entrar', 'entre', 'epoca', 'equipo', 'equivocado', 'eramos',
'eran', 'eras', 'eres', 'error', 'esas', 'escapar', 'escena', 'escribir', 'escrito', 'escucha',
'escuchame', 'escuchar', 'escuche', 'escuchen', 'escuela', 'esos', 'espacio', 'espada', 'espalda', 'especial',
'especialmente', 'especie', 'espectaculo', 'espera', 'esperaba', 'esperando', 'esperanza', 'esperar', 'espere', 'esperen',
'espero', 'espiritu', 'esposa', 'esposo', 'esta', 'estaba', 'estabamos', 'estaban', 'estabas', 'estacion',
'estado', 'estados', 'estais', 'estamos', 'estan', 'estar', 'estara', 'estaran', 'estaras', 'estare',
'estaremos', 'estaria', 'estas', 'este', 'esten', 'estes', 'estilo', 'esto', 'estos', 'estoy',
'estrella', 'estrellas', 'estudio', 'estupendo', 'estupida', 'estupido', 'estuve', 'estuviera', 'estuviste', 'estuvo',
'europa', 'evitar', 'exactamente', 'exacto', 'excelente', 'excepto', 'existe', 'exito', 'experiencia', 'facil',
'falta', 'familia', 'familiar', 'famoso', 'fantastico', 'favor', 'felices', 'felicidad', 'feliz', 'fiesta',
'final', 'finalmente', 'flores', 'fondo', 'forma', 'formas', 'fortuna', 'foto', 'fotos', 'frances',
'francia', 'frank', 'frente', 'frio', 'fuego', 'fuera', 'fueron', 'fuerte', 'fuerza', 'fuerzas',
'fuese', 'fuimos', 'fuiste', 'funciona', 'futbol', 'futuro', 'gana', 'ganado', 'ganar', 'ganas',
'gato', 'general', 'genial', 'genio', 'gente', 'george', 'gloria', 'gobierno', 'golpe', 'gordo',
'gracia', 'gracias', 'gracioso', 'gran', 'grande', 'grandes', 'gratis', 'grave', 'grupo', 'guapa',
'guapo', 'guardia', 'guerra', 'gusta', 'gustaba', 'gustan', 'gustaria', 'gusto', 'habeis', 'haber',
'haberlo', 'haberte', 'habia', 'habian', 'habias', 'habitacion', 'habla', 'hablado', 'hablamos', 'hablan',
'hablando', 'hablar', 'hablas', 'hable', 'hablemos', 'hables', 'hablo', 'habra', 'habria', 'hace',
'hacemos', 'hacen', 'hacer', 'hacerle', 'hacerlo', 'hacerme', 'hacerte', 'haces', 'hacia', 'haciendo',
'haga', 'hagamos', 'hagan', 'hagas', 'hago', 'hambre', 'hara', 'haran', 'haras', 'hare',
'haremos', 'haria', 'harry', 'hasta', 'haya', 'hayas', 'hazlo', 'hecho', 'hechos', 'hemos',
'henry', 'herido', 'hermana', 'hermano', 'hermanos', 'hermosa', 'hermoso', 'heroe', 'hice', 'hiciera',
'hicieron', 'hicimos', 'hiciste', 'hielo', 'hija', 'hijo', 'hijos', 'historia', 'historias', 'hizo',
'hogar', 'hola', 'hombre', 'hombres', 'honor', 'hora', 'horas', 'horrible', 'hospital', 'hotel',
'hubiera', 'hubieras', 'hubiese', 'hubo', 'huele', 'huevos', 'humana', 'humano', 'humanos', 'humor',
'ibas', 'idea', 'ideas', 'idiota', 'idiotas', 'iglesia', 'igual', 'imagen', 'imagino', 'imbecil',
'importa', 'importante', 'imposible', 'incluso', 'increible', 'infierno', 'informacion', 'informe', 'inglaterra', 'ingles',
'inmediatamente', 'inmediato', 'inocente', 'inspector', 'inteligente', 'intencion', 'intenta', 'intentando', 'intentar', 'intento',
'interesa', 'interesante', 'interior', 'inutil', 'investigacion', 'iras', 'iremos', 'irme', 'irnos', 'irse',
'irte', 'isla', 'izquierda', 'jack', 'jake', 'jamas', 'james', 'jane', 'jardin', 'jefe',
'jerry', 'jesus', 'jimmy', 'joder', 'jodido', 'john', 'johnny', 'joven', 'jovenes', 'juego',
'juez', 'jugando', 'jugar', 'juicio', 'junto', 'juntos', 'juro', 'justicia', 'justo', 'lado',
'lados', 'ladron', 'lago', 'lamento', 'larga', 'largo', 'larry', 'lastima', 'leche', 'leer',
'lejos', 'lengua', 'levantate', 'libertad', 'libras', 'libre', 'libro', 'libros', 'lider', 'limpio',
'linda', 'lindo', 'linea', 'lista', 'listo', 'listos', 'llama', 'llamaba', 'llamada', 'llamado',
'llamame', 'llaman', 'llamar', 'llamare', 'llamas', 'llame', 'llamo', 'llave', 'llaves', 'llega',
'llegado', 'llegamos', 'llegar', 'llego', 'llegue', 'llena', 'lleno', 'lleva', 'llevaba', 'llevan',
'llevar', 'llevara', 'llevare', 'llevas', 'lleve', 'llevo', 'llorar', 'lluvia', 'loca', 'loco',
'locos', 'locura', 'londres', 'luces', 'lucha', 'luchar', 'luego', 'lugar', 'lugares', 'luna',
'madre', 'maestro', 'majestad', 'mala', 'malas', 'maldicion', 'maldita', 'maldito', 'malditos', 'malo',
'mama', 'mami', 'mando', 'manera', 'mano', 'manos', 'mantener', 'maquina', 'maravillosa', 'maravilloso',
'marca', 'marcha', 'maria', 'marido', 'mark', 'martin', 'mary', 'mata', 'matado', 'matar',
'matare', 'matarme', 'mataron', 'mato', 'matrimonio', 'mayor', 'mayoria', 'media', 'medicina', 'medico',
'medio', 'mejor', 'mejores', 'memoria', 'menor', 'menos', 'mensaje', 'mente', 'mentira', 'menudo',
'mercado', 'mesa', 'meses', 'metido', 'metros', 'michael', 'miedo', 'mientras', 'mierda', 'mike',
'miles', 'militar', 'millon', 'millones', 'ministro', 'minuto', 'minutos', 'mira', 'mirada', 'mirame',
'mirando', 'mirar', 'mire', 'miren', 'mision', 'misma', 'mismo', 'mismos', 'mitad', 'modo',
'modos', 'molesta', 'momento', 'momentos', 'monstruo', 'monton', 'morir', 'motivo', 'movimiento', 'mucha',
'muchacha', 'muchacho', 'muchachos', 'muchas', 'mucho', 'muchos', 'muere', 'muerta', 'muerte', 'muerto',
'muertos', 'muestra', 'muevas', 'muevete', 'mujer', 'mujeres', 'mundial', 'mundo', 'murio', 'musica',
'nacional', 'nada', 'nadie', 'nariz', 'natural', 'naturaleza', 'nave', 'navidad', 'necesario', 'necesita',
'necesitaba', 'necesitamos', 'necesitan', 'necesitas', 'necesito', 'negocio', 'negocios', 'negra', 'negro', 'negros',
'nena', 'nervioso', 'nick', 'nieve', 'ningun', 'ninguna', 'ninguno', 'nivel', 'noche', 'noches',
'nombre', 'nombres', 'normal', 'norte', 'nosotras', 'nosotros', 'nota', 'noticia', 'noticias', 'novia',
'novio', 'nuestra', 'nuestras', 'nuestro', 'nuestros', 'nueva', 'nuevas', 'nueve', 'nuevo', 'nuevos',
'numero', 'nunca', 'objetivo', 'obra', 'ocho', 'ocupado', 'ocurre', 'ocurrido', 'ocurrio', 'odio',
'oeste', 'oficial', 'oficina', 'oido', 'oiga', 'oigan', 'oigo', 'ojala', 'ojos', 'olvidado',
'olvidalo', 'olvidar', 'olvide', 'olvides', 'opcion', 'operacion', 'opinion', 'oportunidad', 'orden', 'ordenes',
'orgulloso', 'oscuridad', 'oscuro', 'otra', 'otras', 'otro', 'otros', 'oyes', 'paciente', 'padre',
'padres', 'paga', 'pagar', 'pago', 'pais', 'palabra', 'palabras', 'pantalones', 'papa', 'papel',
'papeles', 'papi', 'para', 'parar', 'parece', 'parecen', 'parecer', 'pareces', 'parecia', 'parecio',
'pared', 'pareja', 'paris', 'parque', 'parte', 'partes', 'partido', 'partir', 'pasa', 'pasada',
'pasado', 'pasando', 'pasar', 'pasara', 'pase', 'paseo', 'paso', 'paul', 'pedazo', 'pedi',
'pedido', 'pedir', 'pelea', 'pelear', 'pelicula', 'peliculas', 'peligro', 'peligroso', 'pelo', 'pena',
'pensaba', 'pensado', 'pensando', 'pensar', 'pense', 'peor', 'perder', 'perdi', 'perdido', 'perdio',
'perdon', 'perdona', 'perdoname', 'perdone', 'perfecta', 'perfectamente', 'perfecto', 'periodico', 'permiso', 'permite',
'pero', 'perra', 'perro', 'perros', 'persona', 'personal', 'personas', 'pesar', 'peso', 'peter',
'pide', 'pidio', 'pido', 'piedra', 'piel', 'piensa', 'piensan', 'piensas', 'pienso', 'pierna',
'piernas', 'pies', 'piso', 'pista', 'pistola', 'placer', 'plan', 'planes', 'planeta', 'playa',
'pobre', 'pobres', 'poco', 'pocos', 'podamos', 'podemos', 'poder', 'podia', 'podido', 'podra',
'podras', 'podre', 'podremos', 'podria', 'podriamos', 'podrian', 'podrias', 'policia', 'policias', 'politica',
'pollo', 'polvo', 'pone', 'poner', 'ponga', 'pongo', 'ponte', 'porque', 'posibilidad', 'posible',
'posicion', 'precio', 'preciosa', 'precioso', 'prefiero', 'pregunta', 'preguntar', 'preguntas', 'pregunto', 'prensa',
'preocupa', 'preocupado', 'preocupe', 'preocupes', 'preparado', 'presente', 'presidente', 'presion', 'primer', 'primera',
'primero', 'primo', 'princesa', 'principal', 'principe', 'principio', 'prisa', 'prision', 'probablemente', 'probar',
'problema', 'problemas', 'profesional', 'profesor', 'programa', 'prometo', 'pronto', 'propia', 'propiedad', 'propio',
'proposito', 'proxima', 'proximo', 'proyecto', 'prueba', 'pruebas', 'publico', 'pude', 'pudiera', 'pudo',
'pueblo', 'pueda', 'puedas', 'puede', 'pueden', 'puedes', 'puedo', 'puente', 'puerta', 'puertas',
'pues', 'puesto', 'punto', 'puntos', 'puse', 'puso', 'puta', 'puto', 'queda', 'quedado',
'quedan', 'quedar', 'quedarme', 'quedarse', 'quedarte', 'quedate', 'quede', 'quedo', 'queremos', 'querer',
'queria', 'querias', 'querida', 'querido', 'querria', 'quien', 'quienes', 'quiera', 'quieras', 'quiere',
'quieren', 'quieres', 'quiero', 'quieto', 'quise', 'quisiera', 'quiso', 'quiza', 'quizas', 'radio',
'rapido', 'raro', 'rato', 'rayos', 'razon', 'razones', 'real', 'realidad', 'realmente', 'recibido',
'recibir', 'recordar', 'recuerda', 'recuerdas', 'recuerdo', 'refieres', 'refiero', 'regalo', 'reglas', 'regresa',
'regresar', 'regreso', 'reina', 'relacion', 'reloj', 'repente', 'respecto', 'respeto', 'responsable', 'respuesta',
'restaurante', 'resto', 'resulta', 'reunion', 'richard', 'rico', 'ridiculo', 'riesgo', 'robar', 'robert',
'robo', 'roja', 'rojo', 'roma', 'ropa', 'rosa', 'rostro', 'roto', 'ruego', 'ruido',
'sabado', 'sabe', 'sabemos', 'saben', 'saber', 'saberlo', 'sabes', 'sabia', 'sabias', 'saca',
'sacar', 'sala', 'saldra', 'sale', 'salga', 'salgan', 'salida', 'salido', 'saliendo', 'salio',
'salir', 'salud', 'salvar', 'salvo', 'sangre', 'santa', 'santo', 'sarah', 'sargento', 'sean',
'seas', 'secreto', 'seguir', 'segun', 'segunda', 'segundo', 'segundos', 'segura', 'seguramente', 'seguridad',
'seguro', 'seis', 'semana', 'semanas', 'sentado', 'senti', 'sentia', 'sentido', 'sentimientos', 'sentir',
'sepa', 'sera', 'seran', 'seras', 'sere', 'seria', 'serio', 'servicio', 'sexo', 'sheriff',
'show', 'sido', 'siempre', 'siendo', 'sientate', 'siente', 'sientes', 'sientese', 'siento', 'siete',
'siga', 'significa', 'sigo', 'sigue', 'siguen', 'sigues', 'siguiente', 'silencio', 'silla', 'simple',
'simplemente', 'sino', 'siquiera', 'sirve', 'sistema', 'sitio', 'situacion', 'sobre', 'sociedad', 'socorro',
'soio', 'sois', 'sola', 'solamente', 'soldado', 'soldados', 'solia', 'solo', 'solos', 'sombrero',
'somos', 'sonido', 'sorpresa', 'srta', 'steve', 'sube', 'subir', 'sucede', 'sucedio', 'sucio',
'suelo', 'suena', 'suerte', 'suficiente', 'supe', 'supone', 'supongo', 'supuesto', 'suya', 'suyo',
'talento', 'tambien', 'tampoco', 'tanta', 'tantas', 'tanto', 'tantos', 'tarde', 'tardes', 'tarjeta',
'taxi', 'teatro', 'telefono', 'television', 'tema', 'temo', 'temprano', 'tendra', 'tendran', 'tendras',
'tendre', 'tendremos', 'tendria', 'teneis', 'tenemos', 'tener', 'tenga', 'tengan', 'tengas', 'tengo',
'tenia', 'teniamos', 'tenian', 'tenias', 'tenido', 'teniente', 'termina', 'terminado', 'terminar', 'termino',
'terrible', 'tesoro', 'testigo', 'thomas', 'tiempo', 'tiempos', 'tienda', 'tiene', 'tienen', 'tienes',
'tierra', 'tipo', 'tipos', 'tiro', 'toca', 'tocar', 'toda', 'todas', 'todavia', 'todo',
'todos', 'toma', 'tomado', 'tomando', 'tomar', 'tomas', 'tome', 'tommy', 'tomo', 'tonta',
'tonterias', 'tonto', 'tony', 'toque', 'toques', 'total', 'totalmente', 'trabaja', 'trabajando', 'trabajar',
'trabajo', 'trae', 'traer', 'trago', 'traido', 'traje', 'trajo', 'trampa', 'tranquila', 'tranquilo',
'tras', 'trasero', 'trata', 'tratando', 'tratar', 'trato', 'traves', 'tren', 'tres', 'tribunal',
'triste', 'tumba', 'turno', 'tuve', 'tuviera', 'tuvimos', 'tuviste', 'tuvo', 'tuya', 'tuyo',
'ultima', 'ultimo', 'ultimos', 'unas', 'unica', 'unico', 'unidad', 'unidos', 'universidad', 'unos',
'usar', 'usted', 'ustedes', 'vacaciones', 'vale', 'valiente', 'valor', 'vamonos', 'vamos', 'varias',
'varios', 'vaya', 'vayamos', 'vayan', 'vayas', 'veamos', 'veces', 'veia', 'velocidad', 'vemos',
'vender', 'vendra', 'venga', 'vengan', 'vengo', 'venido', 'venir', 'ventana', 'vera', 'verano',
'veras', 'verdad', 'verdadera', 'verdadero', 'verde', 'vere', 'veremos', 'verla', 'verle', 'verlo',
'verme', 'verte', 'vestido', 'vete', 'viaje', 'victoria', 'vida', 'vidas', 'vieja', 'viejo',
'viejos', 'viendo', 'viene', 'vienen', 'vienes', 'viento', 'viernes', 'vine', 'vino', 'visita',
'vista', 'vistazo', 'viste', 'visto', 'viva', 'vive', 'viviendo', 'vivir', 'vivo', 'volar',
'voluntad', 'volver', 'volvera', 'volvere', 'volvio', 'vosotros', 'vuelo', 'vuelta', 'vuelto', 'vuelva',
'vuelvas', 'vuelve', 'vuelvo', 'vuestra', 'vuestro', 'walter', 'washington', 'whisky', 'yendo', 'york',
'zapatos', 'zona'];

function words(options) {
  function word() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  }

  // No arguments = generate one word
  if (typeof(options) === 'undefined') {
    return word();
  }

  // Just a number = return that many words
  if (typeof(options) === 'number') {
    options = { exactly: options };
  }

  // options supported: exactly, min, max, join

  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }
  var total = options.min + randInt(options.max + 1 - options.min);
  var results = [];
  for (var i = 0; (i < total); i++) {
    results.push(word());
  }
  if (options.join) {
    results = results.join(options.join);
  }
  return results;
}

module.exports = words;
