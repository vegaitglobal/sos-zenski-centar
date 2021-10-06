INSERT INTO "Questions" (
	"Id",
	"Text",
	"Order",
	"IsRequired",
	"SectionId",
	"Icon"
) 

VALUES
	(
		'ef2f3526-b26a-4ef7-8589-46eb74f64521',
		'Kratak opis problema',
		'1',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/no-icon.svg'
	),
	(
		'ee3b6d28-de62-4a60-8894-56b1650a0388',
		'Koji put zove',
		'2',
		'1',
		'fdc12b45-2d12-48b5-b940-4ed7cf78e2b2',
		'media/icons/no-icon.svg'
	),
	(
		'1989aa54-17bb-4361-8d0d-e954078ed2e0',
		'Na koji SOS broj zove?',
		'3',
		'1',
		'fdc12b45-2d12-48b5-b940-4ed7cf78e2b2',
		'media/icons/no-icon.svg'
	),
	(
		'97273bd7-126d-43fd-9539-a1b5a6952ef6',
		'Kanal komunikacije',
		'4',
		'1',
		'cb428035-1089-4026-a39b-925560ab6615',
		'media/icons/no-icon.svg'
	),
	(
		'506d2147-8a4c-474a-93ae-adfa10c55016',
		'Broj ostvarenih interakcija',
		'5',
		'1',
		'cb428035-1089-4026-a39b-925560ab6615',
		'media/icons/no-icon.svg'
	),
	(
		'f76bea89-3ddc-4862-a4a2-15e34bc04eea',
		'Broj susreta',
		'6',
		'1',
		'0da678bd-9110-4dad-97cf-a531ceef1622',
		'media/icons/no-icon.svg'
	),	
	(
		'4f8d18db-8c04-403b-9ca2-da2478b8d5b0',
		'Da li je klijent završio besplatne susrete?',
		'7',
		'1',
		'0da678bd-9110-4dad-97cf-a531ceef1622',
		'media/icons/no-icon.svg'
	),
	(
		'56f3284d-ee05-4932-8755-5780eafc9c3a',
		'Kako je klijent saznao za psihološko savetovalište?',
		'8',
		'1',
		'0da678bd-9110-4dad-97cf-a531ceef1622',
		'media/icons/no-icon.svg'
	),
	(
		'81485ca6-2982-4144-835c-434ce2a2a81b',
		'Broj susreta',
		'9',
		'1',
		'7875c455-6ac9-4daa-a75b-761b0845449c',
		'media/icons/no-icon.svg'
	),
	(
		'546bd8e9-9ac4-4a90-8a59-195ef6e426aa',
		'Da li je klijent završio besplatne susrete?',
		'10',
		'1',
		'7875c455-6ac9-4daa-a75b-761b0845449c',
		'media/icons/no-icon.svg'
	),
	(
		'8d690cff-f64d-4ce9-987b-3adae660d9f0',
		'Kako je klijent saznao za psihološko savetovalište?',
		'11',
		'1',
		'7875c455-6ac9-4daa-a75b-761b0845449c',
		'media/icons/no-icon.svg'
	),
	(
		'ee0439c5-f3d4-431e-b6d8-54ddeda01ccf',
		'Broj susreta',
		'12',
		'1',
		'64f02514-cac6-4563-b1b7-954743c7c05f',
		'media/icons/no-icon.svg'
	),
	(
		'074951d2-9ed0-41bc-98e3-260256c7fae9',
		'Da li je bilo suđenja?',
		'13',
		'1',
		'64f02514-cac6-4563-b1b7-954743c7c05f',
		'media/icons/no-icon.svg'
	),
	(
		'c03c7e16-7b53-4ed0-9f6e-a544c43f47a6',
		'Broj ročišta',
		'14',
		'1',
		'64f02514-cac6-4563-b1b7-954743c7c05f',
		'media/icons/no-icon.svg'
	),
------------------------CONDITIONAL DA LI JE BILO SUDJENJA
	(
		'57029a5a-a9e3-421b-a805-d44907f26ce8',
		'Alimentacija',
		'15',
		'1',
		'64f02514-cac6-4563-b1b7-954743c7c05f',
		'media/icons/no-icon.svg'
	),
	---------------------------SEKCIJA POZIV--------------------------
	(
		'4d9e7553-9a57-4f58-bedc-de98bb21b60b',
		'Pol',
		'16',
		'0',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/gender.svg'
	),
	(
		'14413365-b2d1-4551-93d7-a17fb0317068',
		'Pol',
		'16',
		'0',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/gender.svg'
	),
	(
		'2b47896c-722e-488b-b611-2ddc408f0275',
		'Pol',
		'16',
		'0',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/gender.svg'
	),
	(
		'540c2a5f-13d6-4464-ac7c-0c9b94ae9a94',
		'Pol',
		'16',
		'0',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/gender.svg'
	),
	(
		'45f57722-2227-45c3-a234-2d0435f82e43',
		'Pol',
		'16',
		'0',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/gender.svg'
	),
	(
		'7fe3dc15-0021-4dbf-9833-0044a60195b6',
		'Mesto',
		'17',
		'0',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/place.svg'
	),
	(
		'05841799-a62d-4df6-88fc-fd1b40ff8a64',
		'Mesto',
		'17',
		'0',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/place.svg'
	),
	(
		'e8dd5afc-1d34-41ad-8dbd-50f50f8228b7',
		'Mesto',
		'17',
		'0',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/place.svg'
	),
	(
		'ce8dd0c9-e508-4cff-bb81-612023a604ad',
		'Mesto',
		'17',
		'0',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/place.svg'
	),
	(
		'1ec3dc37-7310-4848-a9e1-29c394688b41',
		'Mesto',
		'17',
		'0',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/place.svg'
	),
	(
		'3f661a72-9f51-42ea-aeac-a2af94ec90b0',
		'Uzrast',
		'18',
		'0',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/age.svg'
	),
	(
		'a3d0c8b4-940b-4322-ab2d-dcf8fe72ab58',
		'Uzrast',
		'18',
		'0',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/age.svg'
	),
	(
		'fe042d64-8af5-4819-a8af-47b157322d80',
		'Uzrast',
		'18',
		'0',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/age.svg'
	),
	(
		'c9d310c2-922e-4f9d-ae77-930d454c877d',
		'Uzrast',
		'18',
		'0',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/age.svg'
	),
	(
		'35a10398-874e-4aa7-874c-ef05bca8eaf2',
		'Uzrast',
		'18',
		'0',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/age.svg'
	),
	(
		'5e8a76cb-0df2-4a69-a580-6890b2eeec44',
		'Radni status',
		'19',
		'0',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/work.svg'
	),
	(
		'3b5f268a-3f6c-47cb-b9f3-e6d080d1b144',
		'Radni status',
		'19',
		'0',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/age.svg'
	),
	(
		'93e806e9-5ca7-4b49-810e-9d3483a9a28a',
		'Radni status',
		'19',
		'0',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/age.svg'
	),
	(
		'4380a5ac-34ba-480a-b214-2b4de9e73ba5',
		'Radni status',
		'19',
		'0',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/age.svg'
	),
	(
		'116897e7-60c9-4ecf-befe-0d7c8201eb57',
		'Radni status',
		'19',
		'0',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/age.svg'
	),
	(
		'89abc9af-6a2b-4494-b2c1-de24697e338f',
		'Da li postoji nasilje?',
		'20',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/violence.svg'
	),
	(
		'5a8e6579-2aee-4dc6-8e2e-545243eef067',
		'Da li postoji nasilje?',
		'20',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/violence.svg'
	),
	(
		'503396ff-b024-48e8-bb5b-0d1aea23299a',
		'Da li postoji nasilje?',
		'20',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/violence.svg'
	),
	(
		'3417448f-052d-48d7-aa2e-a6a5330f5da7',
		'Da li postoji nasilje?',
		'20',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/violence.svg'
	),
	(
		'9d7900cf-c4b0-45fc-8a31-8dcff39f6aa2',
		'Da li postoji nasilje?',
		'20',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/violence.svg'
	),
	(
		'76646393-c582-4cc5-8e94-8fc842ac8109',
		'Bračni status',
		'21',
		'0',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/marriage.svg'
	),
	(
		'a73e4914-e9c2-446e-8cfc-3281f91c6545',
		'Bračni status',
		'21',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/marriage.svg'
	),
	(
		'eb73e60a-2716-4cad-b394-df0a130698a7',
		'Bračni status',
		'21',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/marriage.svg'
	),
	(
		'79482883-908b-44b7-aedb-35295b43541f',
		'Bračni status',
		'21',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/marriage.svg'
	),
	(
		'ab557663-91b3-4849-9544-808fc4cb2cb1',
		'Bračni status',
		'21',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/marriage.svg'
	),
	(
		'1d767c87-7ab5-492d-bf2f-6dc7a9a7d038',
		'Stambena situacija',
		'22',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/home.svg'
	),
	(
		'80dde988-a7ec-4663-b752-c5e7c6eeedd8',
		'Stambena situacija',
		'22',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/home.svg'
	),
	(
		'616d17c9-c208-436c-8ae4-a7d69a80b909',
		'Stambena situacija',
		'22',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/home.svg'
	),
	(
		'8ee5c401-75bd-4e1d-92fd-4af8a1d684ee',
		'Stambena situacija',
		'22',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/home.svg'
	),
	(
		'b32de8c0-8959-4588-b4e0-675f58d10a4d',
		'Stambena situacija',
		'22',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/home.svg'
	),
	(
		'1d1a4ab5-79a9-44b7-a9a6-00d4da667d58',
		'Pripadnost marginalizovanim grupama',
		'23',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/minorities.svg'
	),
	(
		'b8ee36c3-bcad-4b5a-b387-236d2dc40e2b',
		'Pripadnost marginalizovanim grupama',
		'23',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/minorities.svg'
	),
	(
		'406c8020-6f73-4836-b261-e6a10e1f2144',
		'Pripadnost marginalizovanim grupama',
		'23',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/minorities.svg'
	),
	(
		'81fabbd7-1381-4c08-946a-bc4ba22d391b',
		'Pripadnost marginalizovanim grupama',
		'23',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/minorities.svg'
	),
	(
		'52a7bf4b-277e-4f42-aa71-e0d7e7fee47c',
		'Pripadnost marginalizovanim grupama',
		'23',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/minorities.svg'
	),
	---------------------------------KONDICIONAL DA LI POSTOJI NASILJE
	(
		'ba5d614d-8394-4d0b-904c-4799ee7580d4',
		'Ko trpi nasilje?',
		'24',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/tear.svg'
	),
	(
		'ae73e2f1-fee8-4676-b252-bfe9be13a3e9',
		'Ko trpi nasilje?',
		'24',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/tear.svg'
	),
	(
		'91c75273-e9ff-453d-8be1-e5f4ae80fc89',
		'Ko trpi nasilje?',
		'24',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/tear.svg'
	),
	(
		'369f6ca0-e286-4dcd-9d29-55fccd3b1cd2',
		'Ko trpi nasilje?',
		'24',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/tear.svg'
	),
	(
		'563e0b61-a469-4697-8028-7d52e880e35b',
		'Ko trpi nasilje?',
		'24',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/tear.svg'
	),
	--------------------UZRAST DETETA KONDICIONAL
	(
		'a1398937-e4db-44a9-a386-b242d56202e5',
		'Uzrast deteta',
		'25',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/child-age.svg'
	),
	(
		'a35eb4c1-9fec-485b-ad8c-334d5dfe2ebd',
		'Uzrast deteta',
		'25',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/child-age.svg'
	),
	(
		'5eaeb138-f2f8-4b3b-94ba-506e254fd2d9',
		'Uzrast deteta',
		'25',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/child-age.svg'
	),
	(
		'9f083f8a-9c68-484c-9d39-ad093d697800',
		'Uzrast deteta',
		'25',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/child-age.svg'
	),
	(
		'ea5150b3-1a64-400b-9b89-2305d6e53a99',
		'Uzrast deteta',
		'25',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/child-age.svg'
	),
	(
		'e4542713-db23-4077-925c-dea28dccd9fb',
		'Odnos sa nasilnikom',
		'26',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/heart-broken.svg'
	),
	(
		'de476f53-1292-4bed-acfb-d38aedce271f',
		'Odnos sa nasilnikom',
		'26',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/heart-broken.svg'
	),
	(
		'4fdb3f0c-5f7c-46e4-9e35-075791dac07a',
		'Odnos sa nasilnikom',
		'26',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/heart-broken.svg'
	),
	(
		'0f5e78b3-f3af-4c34-8f35-df68231800b7',
		'Odnos sa nasilnikom',
		'26',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/heart-broken.svg'
	),
	(
		'9fa0185b-9dc6-445c-aae6-ea54eda7dc0a',
		'Odnos sa nasilnikom',
		'26',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/heart-broken.svg'
	),
	(
		'657a5fd3-d9a9-4d61-a392-a54caefd4bb6',
		'Prisutni oblici nasilja',
		'27',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/violence-shape.svg'
	),
	(
		'146a9993-70df-4e2c-8cad-4e1c3aee1377',
		'Prisutni oblici nasilja',
		'27',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/violence-shape.svg'
	),
	(
		'0c465680-db66-428e-ac6b-6a1754e178ef',
		'Prisutni oblici nasilja',
		'27',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/violence-shape.svg'
	),
	(
		'cf6c7d5e-0c99-41e0-aa26-113ee257b70f',
		'Prisutni oblici nasilja',
		'27',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/violence-shape.svg'
	),
	(
		'56cb349a-b7bd-4825-9e29-6ffd6c383ab8',
		'Prisutni oblici nasilja',
		'27',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/violence-shape.svg'
	),
	(
		'33d905b0-fe1a-4461-9ff0-8aa3fd3cf633',
		'Pol nasilnika',
		'28',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/gender-red.svg'
	),
	(
		'97239ec4-941b-4d26-b5e1-7bc32839bc1e',
		'Pol nasilnika',
		'28',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/gender-red.svg'
	),
	(
		'747820f8-13b7-42a5-8379-5a5761005527',
		'Pol nasilnika',
		'28',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/gender-red.svg'
	),
	(
		'3d3f6efd-ba2c-45ae-b109-69993327e34e',
		'Pol nasilnika',
		'28',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/gender-red.svg'
	),
	(
		'899b839c-2175-435e-a8bc-b3f57376ff8b',
		'Pol nasilnika',
		'28',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/gender-red.svg'
	),
	(
		'70c32d0f-e1ef-46ac-b1c6-78b5d0b10411',
		'Nasilnik je ranije prijavljen za nasilje?',
		'29',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/handcuffs.svg'
	),
	(
		'27acb1ae-5ebd-494e-bdcc-f2e5306812c0',
		'Nasilnik je ranije prijavljen za nasilje?',
		'29',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/handcuffs.svg'
	),
	(
		'f2379527-e080-41e4-afc5-506c21fa4406',
		'Nasilnik je ranije prijavljen za nasilje?',
		'29',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/handcuffs.svg'
	),
	(
		'ed00c8de-d334-4d00-bc51-180038a955fb',
		'Nasilnik je ranije prijavljen za nasilje?',
		'29',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/handcuffs.svg'
	),
	(
		'415df83e-685d-4da7-bc56-ab2955fd099b',
		'Nasilnik je ranije prijavljen za nasilje?',
		'29',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/handcuffs.svg'
	),
	(
		'326cf6c3-cbd1-4fed-bb78-e8a58e963099',
		'Nasilnik ima izrečene hitne mere?',
		'30',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/stop.svg'
	),
	(
		'7ec7607f-9a06-4909-9eef-2be475ab7a9b',
		'Nasilnik ima izrečene hitne mere?',
		'30',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/stop.svg'
	),
	(
		'1c0cb9d5-43a9-4318-ab2f-196579398a2c',
		'Nasilnik ima izrečene hitne mere?',
		'30',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/stop.svg'
	),
	(
		'b6e8ca52-433a-49e0-aac2-6e4ddce3e040',
		'Nasilnik ima izrečene hitne mere?',
		'30',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/stop.svg'
	),
	(
		'046a6ede-7845-411b-b444-11e537aa1320',
		'Nasilnik ima izrečene hitne mere?',
		'30',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/stop.svg'
	),
	(
		'69b1fc08-1609-4000-966b-0a750b4bf3d4',
		'Nasilnik ima izrečeno krivično delo nasilja u porodici?',
		'31',
		'1',
		'a2f9cbb5-f93e-47ed-ba06-b4e42f394a0f',
		'media/icons/gavel.svg'
	),
	(
		'0cbb6b00-018e-4a1d-8f50-cb54c459207c',
		'Nasilnik ima izrečeno krivično delo nasilja u porodici?',
		'31',
		'1',
		'393de121-fcff-4932-bb46-606e4509a302',
		'media/icons/gavel.svg'
	),
	(
		'a62dd43d-0a37-4461-b6b1-aedbb12b41ed',
		'Nasilnik ima izrečeno krivično delo nasilja u porodici?',
		'31',
		'1',
		'b3abe820-f54a-47d3-9882-e6428612e5fc',
		'media/icons/gavel.svg'
	),
	(
		'e480a779-f47e-4145-8a48-b926d3f6adee',
		'Nasilnik ima izrečeno krivično delo nasilja u porodici?',
		'31',
		'1',
		'55d63fe0-90a8-4e60-9592-030731fbf4b4',
		'media/icons/gavel.svg'
	),
	(
		'bed1f5ee-51ff-43a6-a310-1a2c44b79e61',
		'Nasilnik ima izrečeno krivično delo nasilja u porodici?',
		'31',
		'1',
		'a8e718f6-6832-4e57-b387-3349a99cce32',
		'media/icons/gavel.svg'
	),
	-----------------------------------------------------INTERVENCIJE SEKCIJA-----------------------------
	(
		'01cb293b-d67c-4204-a92a-85dfee4b13f5',
		'Korisnica je dalje upućena:',
		'32',
		'1',
		'8e445aa1-4587-4433-824b-f0ff900f840e',
		'media/icons/no-icon.svg'
	),
	(
		'01498b24-ce6d-4c40-aff6-1afdbb159e29',
		'Korisnica je dalje upućena:',
		'32',
		'1',
		'40fdd452-3837-40e5-a1d5-6a6f7774f838',
		'media/icons/no-icon.svg'
	),
	(
		'fe6e0bb8-932e-48a5-8efc-f2121bfdc11b',
		'Korisnica je dalje upućena:',
		'32',
		'1',
		'8f72b1e0-7a29-4659-b1a1-89c247e96392',
		'media/icons/no-icon.svg'
	),
	(
		'19e0d305-adbc-4c90-8153-ae1c0dd86407',
		'Korisnica je dalje upućena:',
		'32',
		'1',
		'7d59dc7a-5d64-4210-8446-53c885b945cc',
		'media/icons/no-icon.svg'
	),
	(
		'271760b4-c7df-4892-9c85-5ed61eb9e555',
		'Korisnica je dalje upućena:',
		'32',
		'1',
		'08052000-470a-4bf9-8809-b1bf7b45d528',
		'media/icons/no-icon.svg'
	),
	(
		'97ce0828-199d-4903-a1a8-40ea0243e0f3',
		'Urađena je procena rizika',
		'33',
		'1',
		'8e445aa1-4587-4433-824b-f0ff900f840e',
		'media/icons/no-icon.svg'
	),
	(
		'd2a7b5c8-e5af-4c30-95b0-a5cd917f36ca',
		'Urađena je procena rizika',
		'33',
		'1',
		'40fdd452-3837-40e5-a1d5-6a6f7774f838',
		'media/icons/no-icon.svg'
	),
	(
		'7e7e426d-9bce-4632-8756-ebc87f444668',
		'Urađena je procena rizika',
		'33',
		'1',
		'8f72b1e0-7a29-4659-b1a1-89c247e96392',
		'media/icons/no-icon.svg'
	),
	(
		'f0dc617e-299e-4086-b7cf-fe8cae64c10b',
		'Urađena je procena rizika',
		'33',
		'1',
		'7d59dc7a-5d64-4210-8446-53c885b945cc',
		'media/icons/no-icon.svg'
	),
	(
		'c6ed2f65-e439-4d2b-a876-f3d4712818aa',
		'Urađena je procena rizika',
		'33',
		'1',
		'08052000-470a-4bf9-8809-b1bf7b45d528',
		'media/icons/no-icon.svg'
	),
	(
		'dca28ae5-f566-4833-bd41-e3201e342f26',
		'Urađen je bezbednosni plan',
		'34',
		'1',
		'8e445aa1-4587-4433-824b-f0ff900f840e',
		'media/icons/no-icon.svg'
	),
	(
		'dc8e3eb0-98f5-42a3-bfba-34a3504570e6',
		'Urađen je bezbednosni plan',
		'34',
		'1',
		'40fdd452-3837-40e5-a1d5-6a6f7774f838',
		'media/icons/no-icon.svg'
	),
	(
		'e7c7122c-775c-46b7-96fa-969846a63329',
		'Urađen je bezbednosni plan',
		'34',
		'1',
		'8f72b1e0-7a29-4659-b1a1-89c247e96392',
		'media/icons/no-icon.svg'
	),
	(
		'ab952186-ebef-49a8-b2cf-2534ea93a328',
		'Urađen je bezbednosni plan',
		'34',
		'1',
		'7d59dc7a-5d64-4210-8446-53c885b945cc',
		'media/icons/no-icon.svg'
	),
	(
		'6774af12-9b13-47eb-80dd-eb2af3197f9d',
		'Urađen je bezbednosni plan',
		'34',
		'1',
		'08052000-470a-4bf9-8809-b1bf7b45d528',
		'media/icons/no-icon.svg'
	),
	(
		'a9578557-846b-43dd-8f1a-41a3d8c504c7',
		'Pravne intervencije',
		'35',
		'1',
		'8e445aa1-4587-4433-824b-f0ff900f840e',
		'media/icons/no-icon.svg'
	),
	(
		'fd60fdc7-b4c6-43c0-8199-db96871eb322',
		'Pravne intervencije',
		'35',
		'1',
		'40fdd452-3837-40e5-a1d5-6a6f7774f838',
		'media/icons/no-icon.svg'
	),
	(
		'1acd10b9-dca4-424f-9dfd-25f98cee6ce2',
		'Pravne intervencije',
		'35',
		'1',
		'8f72b1e0-7a29-4659-b1a1-89c247e96392',
		'media/icons/no-icon.svg'
	),
	(
		'130e83db-83cd-4f22-a52b-a23e1ba5346a',
		'Pravne intervencije',
		'35',
		'1',
		'7d59dc7a-5d64-4210-8446-53c885b945cc',
		'media/icons/no-icon.svg'
	),
	(
		'54e9af82-6c54-4851-ac00-9ee68d05abac',
		'Pravne intervencije',
		'35',
		'1',
		'08052000-470a-4bf9-8809-b1bf7b45d528',
		'media/icons/no-icon.svg'
	);