import type { Locale } from './index';

export const messages = {
	en: {
		site: {
			tagline: 'I turned repetitive HR tasks — absence tracking, contract handling, data entry — into reusable automated systems. 100h+ saved per month.',
			description:
				'Portfolio showcasing HR automation, reporting systems, and business workflow projects',
			location: 'Barcelona, Spain'
		},
		header: {
			portfolio: 'portfolio',
			about: 'about',
			contact: 'contact',
			resume: 'view my resume',
			languageLabel: 'Select language',
			mobileMenu: 'Toggle mobile menu'
		},
		footer: {
			contactEyebrow: 'Get In Touch',
			contactTitle: 'open channel',
			navigateEyebrow: 'Navigate',
			navigateTitle: 'around the site',
			connectEyebrow: 'Connect',
			connectTitle: 'elsewhere',
			copyright: 'built with calm systems and sharp edges.'
		},
		home: {
			heroEyebrow: 'HR Automation · Internal Tooling · Process Engineering',
			stats: [
				{ value: '8 + 2', label: 'HR automation projects built solo (8 live, 2 in progress)' },
				{ value: '100h+', label: 'saved per month in manual work' },
				{ value: 'VBA · Python · API · SQL · Power BI', label: 'tools applied across projects', secondary: true }
			],
			primaryCta: 'start a conversation',
			secondaryCta: 'browse case studies',
			workEyebrow: 'Work',
			workTitle: 'portfolio',
			workText: 'real projects in HR automation, internal tooling, and data workflows — built and shipped solo.',
			workLink: 'view projects',
			backgroundEyebrow: 'Background',
			backgroundTitle: 'about',
			backgroundText:
				'how I take fragile, repetitive, memory-dependent processes and rebuild them as reusable systems.',
			backgroundLink: 'learn more',
			contactEyebrow: 'Contact',
			contactTitle: 'get in touch',
			contactText:
				'for conversations about process improvement, automation implementation, and real operational problems.',
			contactLink: 'say hello',
			selectedEyebrow: 'Selected Work',
			selectedTitle: 'recent projects',
			selectedText:
				'each project started as a manual bottleneck. click through to see what replaced it.',
			selectedCta: 'see all projects'
		},
		about: {
			metaTitle: 'About',
			metaDescription: 'Learn more about {name}',
			heroEyebrow: 'Profile',
			title: 'about',
			intro: 'fragile processes become stable systems. manual steps become automated pipelines. one-person knowledge becomes team infrastructure.',
			positionEyebrow: 'Approach',
			positionKeywords: ['process-first', 'automation where it counts', 'built to last', 'no single point of failure', 'scale without headcount'],
			toolkitEyebrow: 'Toolkit',
			toolkitTitle: 'what i work with',
			toolGroups: [
				{ title: 'automation', items: ['python', 'vba', 'excel automation', 'outlook workflows', 'tampermonkey'] },
				{ title: 'data & api', items: ['sql', 'rest apis', 'power bi', 'power query', 'data cleaning'] },
				{ title: 'process', items: ['workflow mapping', 'gap analysis', 'exception handling', 'documentation'] },
				{ title: 'tools', items: ['git', 'notion', 'power automate', 'cezanne api'] }
			],
			collaborationEyebrow: 'Collaboration',
			collaborationTitle: "let's work together",
			collaborationText: "if your team is stuck repeating the same manual steps or relying on one person's memory at a critical point — that's exactly the kind of problem i work on.",
			collaborationCta: 'get in touch'
		},
		portfolio: {
			metaTitle: 'Portfolio',
			metaDescription: 'Portfolio of work by {name}',
			heroEyebrow: 'Case Studies',
			title: 'portfolio',
			intro:
				'projects focused on making internal work more reliable, less repetitive, and easier to scale.',
			empty: 'no projects found.',
			moreEyebrow: 'Reach Out',
			moreTitle: 'interested in working together?',
			moreText: "i'm always open to discussing new projects and operational challenges worth untangling.",
			moreCta: "let's talk"
		},
		project: {
			fallbackTitle: 'Project',
			backLink: 'back to portfolio',
			heroEyebrow: 'Case Study',
			dateLabel: 'date',
			tagsLabel: 'tags',
			liveProject: 'view live project',
			viewCode: 'view code',
			galleryEyebrow: 'Gallery',
			galleryTitle: 'project images',
			moreEyebrow: 'More Work',
			moreTitle: 'want to see more?',
			moreText: 'check out the rest of the portfolio for more workflow and automation projects.',
			moreCta: 'view all projects',
			detailAlt: 'detail'
		},
		contact: {
			metaTitle: 'Contact',
			metaDescription: 'Get in touch with {name}',
			heroEyebrow: 'Contact',
			title: 'get in touch',
			intro: 'a space for project ideas, collaboration notes, and practical conversations.',
			panelEyebrow: "Let's Talk",
			panelTitle: 'open thread',
			panelText:
				"whether you have a workflow challenge, an internal tool idea, or just want to say hello, i'd love to hear from you.",
			emailLabel: 'email',
			locationLabel: 'location',
			socialLabel: 'social',
			responseTitle: 'response time',
			responseText:
				'i typically respond to emails within 24-48 hours. if something is urgent, mention it in your message.',
			availabilityEyebrow: 'Availability',
			availabilityTitle: 'open for opportunities',
			availabilityText:
				"i'm always interested in hearing about new projects, collaborations, and opportunities.",
			availabilityTags: ['freelance projects', 'full-time roles', 'consulting', 'collaborations']
		},
		form: {
			eyebrow: 'Start A Conversation',
			title: 'say hello',
			successTitle: 'message sent successfully',
			successText: "thanks for reaching out. i'll get back to you soon.",
			reset: 'send another message',
			nameLabel: 'your name',
			namePlaceholder: 'enter your name',
			emailLabel: 'your email',
			emailPlaceholder: 'enter your email',
			messageLabel: 'your message',
			messagePlaceholder: 'tell me about your project or just say hi',
			sending: 'sending...',
			submit: 'send message',
			genericError: 'Something went wrong. Please try again.',
			unexpectedError: 'An unexpected error occurred.'
		},
		card: {
			viewCaseStudy: 'view case study',
			liveLabel: 'live',
			codeLabel: 'code',
			liveAria: 'View live project',
			codeAria: 'View project code'
		}
	},
	zh: {
		site: {
			tagline: '把缺勤识别、合同处理、数据核对等高频手工流程变成可复用的自动化系统——每月减少 100 小时以上的重复劳动。',
			description: '展示人力资源自动化、报表系统与业务流程项目的作品集',
			location: '西班牙，巴塞罗那'
		},
		header: {
			portfolio: '项目集',
			about: '关于',
			contact: '联系',
			resume: '查看简历',
			languageLabel: '选择语言',
			mobileMenu: '切换移动菜单'
		},
		footer: {
			contactEyebrow: '联系我',
			contactTitle: '开放沟通',
			navigateEyebrow: '导航',
			navigateTitle: '浏览网站',
			connectEyebrow: '社交',
			connectTitle: '其他平台',
			copyright: '以冷静的系统思维和利落的执行搭建。'
		},
		home: {
			heroEyebrow: 'HR 自动化 · 内部工具 · 流程工程',
			stats: [
				{ value: '8 + 2', label: '个 HR 自动化项目，独立完成（8 个已上线，2 个进行中）' },
				{ value: '100h+', label: '每月减少的重复劳动时间' },
				{ value: 'VBA · Python · API · SQL · Power BI', label: '跨项目使用的工具栈', secondary: true }
			],
			primaryCta: '联系我',
			secondaryCta: '查看案例',
			workEyebrow: '作品',
			workTitle: '项目集',
			workText: 'HR 自动化、内部工具与数据流程的真实项目——全部独立完成。',
			workLink: '查看项目',
			backgroundEyebrow: '背景',
			backgroundTitle: '关于',
			backgroundText: '如何把脆弱、重复、依赖人工记忆的流程重构为可复用系统。',
			backgroundLink: '了解更多',
			contactEyebrow: '联系',
			contactTitle: '取得联系',
			contactText: '讨论流程优化、自动化落地和实际业务问题。',
			contactLink: '打个招呼',
			selectedEyebrow: '精选项目',
			selectedTitle: '近期项目',
			selectedText: '每个项目都起于一个手工瓶颈，点进去看它被什么替代了。',
			selectedCta: '查看全部项目'
		},
		about: {
			metaTitle: '关于',
			metaDescription: '进一步了解 {name}',
			heroEyebrow: '简介',
			title: '关于',
			intro: '脆弱的流程变成稳定的系统。手工步骤变成自动化管道。只有某人知道的操作变成团队共用的基础设施。',
			positionEyebrow: '工作方式',
			positionKeywords: ['流程优先', '在真正值得的地方自动化', '经得起时间的方案', '消除单点依赖', '不靠加人来扩展'],
			toolkitEyebrow: '工具箱',
			toolkitTitle: '我常用的能力与工具',
			toolGroups: [
				{ title: '自动化', items: ['python', 'vba', 'excel 自动化', 'outlook 流程', 'tampermonkey'] },
				{ title: '数据与 API', items: ['sql', 'rest api', 'power bi', 'power query', '数据清洗'] },
				{ title: '流程', items: ['流程梳理', '缺口分析', '异常处理设计', '文档沉淀'] },
				{ title: '工具', items: ['git', 'notion', 'power automate', 'cezanne api'] }
			],
			collaborationEyebrow: '合作',
			collaborationTitle: '一起做点实用的东西',
			collaborationText: '如果你的团队在重复同样的手工操作，或者某个关键节点依赖某个人的记忆——这正是我处理的问题。',
			collaborationCta: '联系我'
		},
		portfolio: {
			metaTitle: '项目集',
			metaDescription: '{name} 的项目作品集',
			heroEyebrow: '案例研究',
			title: '项目集',
			intro: '这些项目都围绕让内部工作更稳定、更少重复、更容易扩展。',
			empty: '暂时没有项目。',
			moreEyebrow: '联系',
			moreTitle: '想一起合作吗？',
			moreText: '如果你正面对新的项目或运营难题，我很愿意一起拆解。',
			moreCta: '聊一聊'
		},
		project: {
			fallbackTitle: '项目',
			backLink: '返回项目集',
			heroEyebrow: '案例研究',
			dateLabel: '日期',
			tagsLabel: '标签',
			liveProject: '查看线上项目',
			viewCode: '查看代码',
			galleryEyebrow: '图库',
			galleryTitle: '项目图片',
			moreEyebrow: '更多项目',
			moreTitle: '还想继续看？',
			moreText: '可以继续浏览项目集，查看更多关于工作流和自动化的案例。',
			moreCta: '查看全部项目',
			detailAlt: '细节图'
		},
		contact: {
			metaTitle: '联系',
			metaDescription: '与 {name} 取得联系',
			heroEyebrow: '联系',
			title: '取得联系',
			intro: '这里适合聊项目想法、合作方向和实际流程问题。',
			panelEyebrow: '聊一聊',
			panelTitle: '开放话题',
			panelText: '无论你是有流程难题、内部工具想法，还是单纯想打个招呼，我都很乐意收到你的消息。',
			emailLabel: '邮箱',
			locationLabel: '地点',
			socialLabel: '社交平台',
			responseTitle: '回复时间',
			responseText: '通常我会在 24 到 48 小时内回复邮件。如果事情比较紧急，可以在消息里特别说明。',
			availabilityEyebrow: '合作状态',
			availabilityTitle: '开放新的机会',
			availabilityText: '我一直愿意了解新的项目、合作和工作机会。',
			availabilityTags: ['自由项目', '全职岗位', '咨询合作', '跨团队协作']
		},
		form: {
			eyebrow: '开始交流',
			title: '打个招呼',
			successTitle: '消息发送成功',
			successText: '谢谢你的联系，我会尽快回复。',
			reset: '再发一条消息',
			nameLabel: '你的名字',
			namePlaceholder: '请输入你的名字',
			emailLabel: '你的邮箱',
			emailPlaceholder: '请输入你的邮箱',
			messageLabel: '你的留言',
			messagePlaceholder: '介绍一下你的项目，或者简单打个招呼也可以',
			sending: '发送中...',
			submit: '发送消息',
			genericError: '出了点问题，请稍后再试。',
			unexpectedError: '发生了意外错误。'
		},
		card: {
			viewCaseStudy: '查看案例',
			liveLabel: '线上',
			codeLabel: '代码',
			liveAria: '查看线上项目',
			codeAria: '查看项目代码'
		}
	},
	es: {
		site: {
			tagline: 'Converti tareas de RR. HH. repetitivas — ausencias, contratos, validacion de datos — en sistemas automatizados reutilizables. 100h+ ahorradas al mes.',
			description:
				'Portafolio con proyectos de automatizacion de RR. HH., sistemas de reporting y mejoras operativas',
			location: 'Barcelona, Espana'
		},
		header: {
			portfolio: 'portafolio',
			about: 'sobre mi',
			contact: 'contacto',
			resume: 'ver mi CV',
			languageLabel: 'Seleccionar idioma',
			mobileMenu: 'Abrir o cerrar el menu movil'
		},
		footer: {
			contactEyebrow: 'Contacto',
			contactTitle: 'canal abierto',
			navigateEyebrow: 'Navegar',
			navigateTitle: 'por el sitio',
			connectEyebrow: 'Conectar',
			connectTitle: 'en otros espacios',
			copyright: 'hecho con sistemas tranquilos y ejecucion precisa.'
		},
		home: {
			heroEyebrow: 'Automatizacion de RR. HH. · Herramientas internas · Ingenieria de procesos',
			stats: [
				{ value: '8 + 2', label: 'proyectos de automatizacion de RR. HH. construidos en solitario (8 en uso, 2 en curso)' },
				{ value: '100h+', label: 'ahorradas al mes en trabajo manual' },
				{ value: 'VBA · Python · API · SQL · Power BI', label: 'herramientas aplicadas en los proyectos', secondary: true }
			],
			primaryCta: 'iniciar una conversacion',
			secondaryCta: 'ver casos de estudio',
			workEyebrow: 'Trabajo',
			workTitle: 'portafolio',
			workText:
				'proyectos reales en automatizacion de RR. HH., herramientas internas y flujos de datos — desarrollados en solitario.',
			workLink: 'ver proyectos',
			backgroundEyebrow: 'Enfoque',
			backgroundTitle: 'sobre mi',
			backgroundText:
				'como tomo procesos fragiles, repetitivos y dependientes de memoria personal y los reconstruyo como sistemas reutilizables.',
			backgroundLink: 'saber mas',
			contactEyebrow: 'Contacto',
			contactTitle: 'hablemos',
			contactText:
				'para hablar sobre mejora de procesos, implementacion de automatizacion y problemas operativos reales.',
			contactLink: 'saludar',
			selectedEyebrow: 'Trabajo seleccionado',
			selectedTitle: 'proyectos recientes',
			selectedText:
				'cada proyecto empezo como un cuello de botella manual. entra a ver que lo reemplazo.',
			selectedCta: 'ver todos los proyectos'
		},
		about: {
			metaTitle: 'Sobre mi',
			metaDescription: 'Conoce mejor a {name}',
			heroEyebrow: 'Perfil',
			title: 'sobre mi',
			intro: 'los procesos fragiles se vuelven sistemas estables. los pasos manuales se convierten en pipelines automatizados. el conocimiento de una sola persona se transforma en infraestructura de equipo.',
			positionEyebrow: 'Enfoque',
			positionKeywords: ['proceso primero', 'automatizar donde importa', 'soluciones duraderas', 'sin punto unico de fallo', 'escalar sin sumar personas'],
			toolkitEyebrow: 'Herramientas',
			toolkitTitle: 'con que trabajo',
			toolGroups: [
				{ title: 'automatizacion', items: ['python', 'vba', 'automatizacion en excel', 'flujos en outlook', 'tampermonkey'] },
				{ title: 'datos y api', items: ['sql', 'rest apis', 'power bi', 'power query', 'limpieza de datos'] },
				{ title: 'proceso', items: ['mapeo de flujos', 'analisis de huecos', 'manejo de excepciones', 'documentacion'] },
				{ title: 'herramientas', items: ['git', 'notion', 'power automate', 'cezanne api'] }
			],
			collaborationEyebrow: 'Colaboracion',
			collaborationTitle: 'trabajemos juntos',
			collaborationText: 'si tu equipo repite los mismos pasos manuales cada semana, o hay un punto critico que depende de la memoria de una persona — ese es exactamente el tipo de problema en el que trabajo.',
			collaborationCta: 'ponte en contacto'
		},
		portfolio: {
			metaTitle: 'Portafolio',
			metaDescription: 'Portafolio de trabajo de {name}',
			heroEyebrow: 'Casos de estudio',
			title: 'portafolio',
			intro:
				'proyectos centrados en hacer el trabajo interno mas fiable, menos repetitivo y mas facil de escalar.',
			empty: 'no se encontraron proyectos.',
			moreEyebrow: 'Contacto',
			moreTitle: 'te interesa colaborar?',
			moreText:
				'siempre estoy abierto a conversar sobre nuevos proyectos y retos operativos que merecen ordenarse.',
			moreCta: 'hablemos'
		},
		project: {
			fallbackTitle: 'Proyecto',
			backLink: 'volver al portafolio',
			heroEyebrow: 'Caso de estudio',
			dateLabel: 'fecha',
			tagsLabel: 'etiquetas',
			liveProject: 'ver proyecto en vivo',
			viewCode: 'ver codigo',
			galleryEyebrow: 'Galeria',
			galleryTitle: 'imagenes del proyecto',
			moreEyebrow: 'Mas trabajo',
			moreTitle: 'quieres ver mas?',
			moreText: 'explora el resto del portafolio para ver mas proyectos de automatizacion y workflows.',
			moreCta: 'ver todos los proyectos',
			detailAlt: 'detalle'
		},
		contact: {
			metaTitle: 'Contacto',
			metaDescription: 'Ponte en contacto con {name}',
			heroEyebrow: 'Contacto',
			title: 'hablemos',
			intro: 'un espacio para ideas de proyecto, notas de colaboracion y conversaciones practicas.',
			panelEyebrow: 'Hablemos',
			panelTitle: 'hilo abierto',
			panelText:
				'si tienes un reto de workflow, una idea de herramienta interna o simplemente quieres saludar, me encantara leerte.',
			emailLabel: 'correo',
			locationLabel: 'ubicacion',
			socialLabel: 'redes',
			responseTitle: 'tiempo de respuesta',
			responseText:
				'suelo responder correos en 24-48 horas. si algo es urgente, indicalo en tu mensaje.',
			availabilityEyebrow: 'Disponibilidad',
			availabilityTitle: 'abierto a oportunidades',
			availabilityText:
				'siempre me interesa escuchar sobre nuevos proyectos, colaboraciones y oportunidades.',
			availabilityTags: ['proyectos freelance', 'roles full-time', 'consultoria', 'colaboraciones']
		},
		form: {
			eyebrow: 'Iniciar una conversacion',
			title: 'di hola',
			successTitle: 'mensaje enviado con exito',
			successText: 'gracias por escribir. te respondere pronto.',
			reset: 'enviar otro mensaje',
			nameLabel: 'tu nombre',
			namePlaceholder: 'escribe tu nombre',
			emailLabel: 'tu correo',
			emailPlaceholder: 'escribe tu correo',
			messageLabel: 'tu mensaje',
			messagePlaceholder: 'cuentame sobre tu proyecto o simplemente saluda',
			sending: 'enviando...',
			submit: 'enviar mensaje',
			genericError: 'Algo salio mal. Intentalo de nuevo.',
			unexpectedError: 'Ocurrio un error inesperado.'
		},
		card: {
			viewCaseStudy: 'ver caso de estudio',
			liveLabel: 'vivo',
			codeLabel: 'codigo',
			liveAria: 'Ver proyecto en vivo',
			codeAria: 'Ver codigo del proyecto'
		}
	}
} satisfies Record<Locale, Record<string, unknown>>;
