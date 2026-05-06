import type {
  Flashcard,
  FlashcardDifficulty,
  FlashcardStatus,
  FlashcardType,
} from "../types/flashcard";

const now = new Date().toISOString();

type SeedCard = {
  id: string;
  type: FlashcardType;
  question: string;
  answer: string;
  theme: string;
  area: string;
  difficulty?: FlashcardDifficulty;
  status?: FlashcardStatus;
  source?: string;
  notes?: string;
};

const makeCard = (card: SeedCard): Flashcard => ({
  difficulty: "facil",
  status: "publicado",
  source: "Banco autoral FlashMEDs",
  ...card,
  createdAt: now,
  updatedAt: now,
});

const cards: SeedCard[] = [
  {
    id: "card-asma-crise-inicial",
    type: "conduta",
    question: "Qual e a conduta inicial na crise asmatica moderada em adulto na atencao primaria?",
    answer:
      "Avaliar gravidade, administrar beta-2 agonista inalatorio de curta acao em doses repetidas, considerar ipratropio e corticoide sistemico, ofertar oxigenio se saturacao baixa e reavaliar resposta clinica.",
    theme: "Asma",
    area: "Pneumologia",
    difficulty: "medio",
    source: "Diretrizes clinicas",
    notes: "Card introdutorio para manejo de exacerbacao.",
  },
  {
    id: "card-hipertensao-diagnostico",
    type: "diagnostico",
    question: "Como confirmar o diagnostico de hipertensao arterial fora de situacoes de urgencia?",
    answer:
      "Confirmar com medidas repetidas em consultas diferentes ou por MRPA/MAPA, considerando tecnica adequada, fatores de risco e lesao de orgao-alvo.",
    theme: "Hipertensao",
    area: "Cardiologia",
    source: "Diretriz Brasileira de Hipertensao",
  },
  {
    id: "card-diabetes-rastreamento",
    type: "rastreamento",
    question: "Quais exames podem ser usados para rastrear diabetes mellitus tipo 2?",
    answer:
      "Glicemia de jejum, hemoglobina glicada e teste oral de tolerancia a glicose podem ser utilizados conforme contexto clinico e disponibilidade.",
    theme: "Diabetes",
    area: "Endocrinologia",
    source: "Protocolos de atencao primaria",
  },
  {
    id: "card-itu-antibiotico",
    type: "medicamento",
    question: "Qual informacao deve ser checada antes de escolher antibiotico para cistite nao complicada?",
    answer:
      "Checar alergias, gestacao, funcao renal, uso recente de antibioticos, resistencia local, sinais de pielonefrite e contraindicacoes individuais.",
    theme: "Infeccao urinaria",
    area: "Infectologia",
    difficulty: "medio",
    status: "rascunho",
    source: "Aula MFC",
  },
  {
    id: "card-pre-natal-prevencao",
    type: "prevencao",
    question: "Qual suplementacao deve ser lembrada no inicio do pre-natal de baixo risco?",
    answer:
      "Acido folico no periodo periconcepcional/inicio da gestacao e ferro conforme recomendacoes locais, alem de avaliar vacinas e exames iniciais.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
    difficulty: "medio",
    source: "Caderno de atencao basica",
  },

  // Posologia de medicamentos comuns
  {
    id: "posologia-cefalexina-adulto",
    type: "medicamento",
    question: "A cefalexina e administrada de quanto em quanto tempo em adultos para infeccoes comuns?",
    answer:
      "250-500 mg VO a cada 6 horas; em algumas infeccoes leves, como pele ou cistite nao complicada, pode-se usar 500 mg a cada 12 horas. Dose usual total: 1-4 g/dia, em geral por 7-14 dias.",
    theme: "Posologia",
    area: "Farmacologia",
    source: "Bula padrao",
  },
  {
    id: "posologia-ibuprofeno-adulto",
    type: "medicamento",
    question: "Qual a posologia usual do ibuprofeno 600 mg em adulto para dor ou inflamacao?",
    answer:
      "600 mg VO a cada 8 horas, com dose maxima de 2.400 mg/dia. Tomar com alimento para reduzir irritacao gastrica.",
    theme: "Posologia",
    area: "Farmacologia",
  },
  {
    id: "posologia-dipirona-adulto",
    type: "medicamento",
    question: "A dipirona 500 mg e administrada de quanto em quanto tempo em adultos?",
    answer:
      "500-1.000 mg VO a cada 6 horas, com dose maxima de 4 g/dia. Muito usada no Brasil para dor e febre.",
    theme: "Posologia",
    area: "Farmacologia",
  },
  {
    id: "posologia-amoxicilina-adulto",
    type: "medicamento",
    question: "A amoxicilina e administrada de quanto em quanto tempo em adultos?",
    answer:
      "500 mg VO a cada 8 horas ou 875 mg a cada 12 horas. Dose usual total: 1,5-3 g/dia; pode ser tomada com ou sem alimento.",
    theme: "Posologia",
    area: "Farmacologia",
  },
  {
    id: "posologia-paracetamol-adulto",
    type: "medicamento",
    question: "Qual a posologia do paracetamol 750 mg ou 1 g em adulto?",
    answer:
      "500-1.000 mg VO a cada 6 horas, com dose maxima de 4 g/dia. Reduzir dose em hepatopatas, etilistas ou idosos frageis.",
    theme: "Posologia",
    area: "Farmacologia",
  },
  {
    id: "posologia-azitromicina-adulto",
    type: "medicamento",
    question: "A azitromicina 500 mg e administrada de qual forma em adultos?",
    answer:
      "500 mg no 1o dia e 250 mg/dia por mais 4 dias, ou 500 mg/dia por 3 dias. O regime e curto pela meia-vida longa.",
    theme: "Posologia",
    area: "Farmacologia",
  },
  {
    id: "posologia-prednisona-asma-dpoc",
    type: "medicamento",
    question: "Qual a dose usual de prednisona em crise de asma ou DPOC?",
    answer:
      "40-60 mg/dia VO por 5-7 dias. Em cursos curtos, geralmente nao ha necessidade de desmame.",
    theme: "Posologia",
    area: "Pneumologia",
  },

  // Duracao de tratamentos comuns
  {
    id: "duracao-pac-leve",
    type: "conduta",
    question: "O tratamento antibiotico da pneumonia adquirida na comunidade leve dura quantos dias?",
    answer:
      "Em geral, 5-7 dias em casos leves. Casos moderados ou graves costumam exigir 7-10 dias, podendo chegar a 14 dias conforme evolucao e resposta clinica.",
    theme: "Duracao de tratamento",
    area: "Infectologia",
    source: "Diretrizes SBPT",
  },
  {
    id: "duracao-cistite-cefalexina",
    type: "conduta",
    question: "Quanto tempo dura o tratamento de cistite nao complicada com cefalexina?",
    answer:
      "Em geral, 7-14 dias. Ajustar conforme perfil da paciente, gravidade, cultura, resistencia local e resposta clinica.",
    theme: "Duracao de tratamento",
    area: "Infectologia",
  },
  {
    id: "duracao-sinusite-bacteriana",
    type: "conduta",
    question: "O tratamento de sinusite bacteriana aguda dura quantos dias?",
    answer:
      "Em adultos com quadro leve, costuma durar 5-7 dias com amoxicilina ou amoxicilina-clavulanato. Prolongar ou reavaliar se nao houver melhora.",
    theme: "Duracao de tratamento",
    area: "Infectologia",
  },
  {
    id: "duracao-faringotonsilite-estreptococica",
    type: "conduta",
    question: "Quanto tempo dura o tratamento de faringotonsilite estreptococica com penicilina?",
    answer:
      "10 dias com penicilina V, por exemplo 500 mg VO 3 vezes ao dia. O objetivo e erradicar o Streptococcus pyogenes e prevenir febre reumatica.",
    theme: "Duracao de tratamento",
    area: "Infectologia",
  },
  {
    id: "duracao-otite-media-crianca",
    type: "conduta",
    question: "O tratamento de otite media aguda em crianca dura quantos dias?",
    answer:
      "5-10 dias com amoxicilina. Pode ser 5 dias em criancas maiores de 2 anos com quadro leve; 10 dias em menores de 2 anos ou quadros graves.",
    theme: "Duracao de tratamento",
    area: "Pediatria",
  },
  {
    id: "duracao-pielonefrite-nao-complicada",
    type: "conduta",
    question: "Quanto tempo de antibiotico e usado na pielonefrite nao complicada?",
    answer:
      "Em geral, 7-14 dias, conforme antibiotico escolhido, gravidade e cultura. Sempre solicitar urocultura quando possivel.",
    theme: "Duracao de tratamento",
    area: "Infectologia",
  },
  {
    id: "duracao-tinea-pedis",
    type: "conduta",
    question: "Qual a duracao tipica do tratamento com antifungico topico para tinea pedis?",
    answer:
      "2-4 semanas com terbinafina ou clotrimazol. Em geral, manter por cerca de 1 semana apos melhora clinica para reduzir recidiva.",
    theme: "Duracao de tratamento",
    area: "Dermatologia",
  },

  // Antibioticos: primeira escolha e alternativas por cenario
  {
    id: "atb-faringotonsilite-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiotico de 1a escolha para faringotonsilite estreptococica em paciente sem alergia a penicilina?",
    answer:
      "Penicilina V 500 mg VO 3 vezes ao dia por 10 dias ou penicilina benzatina 1.200.000 UI IM dose unica em adultos. E o padrao-ouro e previne febre reumatica.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-faringotonsilite-alergia-nao-grave",
    type: "medicamento",
    question: "Qual opcao usar na faringotonsilite estreptococica quando o paciente tem alergia nao grave a penicilina e precisa de alternativa a penicilina V ou benzatina?",
    answer:
      "Cefalexina e uma alternativa pratica; em alguns cenarios pode-se usar amoxicilina se a historia nao sugerir alergia verdadeira. O motivo e a baixa chance de reacao cruzada em alergias nao graves.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-faringotonsilite-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico usar para faringotonsilite estreptococica quando o paciente tem alergia grave ou anafilaxia a penicilina?",
    answer:
      "Azitromicina 500 mg no 1o dia e 250 mg/dia por mais 4 dias, ou outro macrolideo. Evita beta-lactamicos, embora tenha maior risco de resistencia.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-otite-crianca-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiotico de 1a escolha para otite media aguda em crianca sem alergia a beta-lactamicos?",
    answer:
      "Amoxicilina 50-90 mg/kg/dia VO, dividida a cada 8 ou 12 horas, por 5-10 dias. Usa-se dose alta para cobrir pneumococo resistente.",
    theme: "Antibioticos",
    area: "Pediatria",
  },
  {
    id: "atb-otite-crianca-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico usar para otite media aguda em crianca com alergia grave a penicilina?",
    answer:
      "Azitromicina 10 mg/kg/dia por 3-5 dias. E uma opcao segura por evitar beta-lactamicos, mas pode ser menos eficaz contra pneumococo resistente.",
    theme: "Antibioticos",
    area: "Pediatria",
  },
  {
    id: "atb-sinusite-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiotico de 1a escolha para sinusite bacteriana aguda em adulto sem alergia?",
    answer:
      "Amoxicilina ou amoxicilina-clavulanato 500/125 mg VO a cada 8 horas por 5-7 dias. Preferir amoxicilina-clavulanato se houver falha previa ou maior risco de beta-lactamase.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-sinusite-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico usar para sinusite bacteriana aguda em adulto com alergia grave a penicilina?",
    answer:
      "Doxiciclina 100 mg VO a cada 12 horas por 5-7 dias, ou levofloxacino em situacoes selecionadas. Nao ha reacao cruzada com beta-lactamicos e cobre patogenos respiratorios comuns.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-pac-leve-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiotico de 1a escolha ambulatorial para PAC leve sem comorbidades e sem alergia?",
    answer:
      "Amoxicilina 1 g VO a cada 8 horas por 5-7 dias. Em baixo risco, a monoterapia beta-lactamica cobre bem pneumococo.",
    theme: "Antibioticos",
    area: "Pneumologia",
  },
  {
    id: "atb-pac-leve-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico usar na PAC leve ambulatorial quando o paciente tem alergia grave a beta-lactamicos?",
    answer:
      "Levofloxacino ou moxifloxacino. Sao fluoroquinolonas respiratorias com cobertura para pneumococo e atipicos, mas devem ser reservadas pelo risco de tendinopatia, QT longo e C. difficile.",
    theme: "Antibioticos",
    area: "Pneumologia",
  },
  {
    id: "atb-cistite-mulher-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiotico de 1a escolha para cistite nao complicada em mulher adulta sem alergia?",
    answer:
      "Nitrofurantoina 100 mg VO a cada 6 horas por 5 dias ou fosfomicina 3 g dose unica. Sao opcoes de menor espectro e ajudam a preservar fluoroquinolonas.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-pielonefrite-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiotico de 1a escolha para pielonefrite nao complicada em mulher adulta sem alergia?",
    answer:
      "Ciprofloxacino 500 mg VO a cada 12 horas por 7-14 dias, se sensibilidade local permitir. Sempre solicitar cultura, pois a escolha deve ser guiada por resistencia.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-celulite-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico usar para celulite ou erisipela nao complicada em paciente com alergia grave a penicilina?",
    answer:
      "Clindamicina 300-450 mg VO a cada 6 horas por 7-10 dias. Cobre estreptococos e S. aureus sem usar beta-lactamicos; considerar MRSA conforme contexto.",
    theme: "Antibioticos",
    area: "Dermatologia",
  },
  {
    id: "atb-mordida-humana-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico usar para infeccao de partes moles com risco de anaerobios, como mordida humana, em paciente com alergia grave a penicilina?",
    answer:
      "Clindamicina + ciprofloxacino, ou moxifloxacino em monoterapia em adultos selecionados. A combinacao cobre aerobios e anaerobios sem beta-lactamicos.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-pneumonia-atipica",
    type: "medicamento",
    question: "Qual o antibiotico de 1a escolha para pneumonia atipica por suspeita de Mycoplasma ou Chlamydophila?",
    answer:
      "Azitromicina 500 mg VO no 1o dia e 250 mg/dia por mais 4 dias. Alternativas: claritromicina ou doxiciclina, que tambem cobre atipicos.",
    theme: "Antibioticos",
    area: "Pneumologia",
  },
  {
    id: "atb-itu-crianca",
    type: "medicamento",
    question: "Qual antibiotico de 1a escolha para cistite em crianca, considerando idade, peso e cultura?",
    answer:
      "Amoxicilina-clavulanato ou cefalexina, ajustando por peso e sensibilidade. Em alergia grave, considerar nitrofurantoina se idade permitir e evitar fluoroquinolonas na rotina pediatrica.",
    theme: "Antibioticos",
    area: "Pediatria",
  },
  {
    id: "atb-gonorreia-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiotico de 1a escolha para gonorreia nao complicada em paciente sem alergia?",
    answer:
      "Ceftriaxona 500 mg IM dose unica associada a azitromicina 1 g VO dose unica, conforme protocolos que cobrem tambem possivel coinfeccao por clamidia.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-gonorreia-alergia-cefalosporina",
    type: "medicamento",
    question: "Qual alternativa para gonorreia nao complicada em paciente com alergia grave a cefalosporinas?",
    answer:
      "Gentamicina 240 mg IM dose unica + azitromicina 2 g VO dose unica. Evita cefalosporina e reduz risco de falha por cobertura combinada.",
    theme: "Antibioticos",
    area: "Infectologia",
  },
  {
    id: "atb-diverticulite-sem-alergia",
    type: "medicamento",
    question: "Qual antibiotico de 1a escolha para diverticulite aguda nao complicada em paciente sem alergia?",
    answer:
      "Amoxicilina-clavulanato 875/125 mg VO a cada 12 horas por 7-10 dias. Cobre gram-negativos e anaerobios.",
    theme: "Antibioticos",
    area: "Gastroenterologia",
  },
  {
    id: "atb-diverticulite-alergia-grave",
    type: "medicamento",
    question: "Qual alternativa para diverticulite aguda em paciente com alergia grave a penicilina?",
    answer:
      "Ciprofloxacino 500 mg VO a cada 12 horas + metronidazol 500 mg a cada 8 horas por 7-10 dias. A combinacao cobre gram-negativos e anaerobios.",
    theme: "Antibioticos",
    area: "Gastroenterologia",
  },
  {
    id: "atb-abscesso-dentario-sem-alergia",
    type: "medicamento",
    question: "Qual antibiotico de 1a escolha para abscesso dentario ou periapical em paciente sem alergia?",
    answer:
      "Amoxicilina 500 mg VO a cada 8 horas por 5-7 dias; associar clavulanato se quadro grave. Drenagem e controle odontologico sao essenciais.",
    theme: "Antibioticos",
    area: "Odontologia",
  },
  {
    id: "atb-abscesso-dentario-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico de 1a escolha para abscesso dentario em paciente com alergia grave a penicilina?",
    answer:
      "Clindamicina 300-450 mg VO a cada 6 horas por 5-7 dias. Tem boa penetracao ossea e cobertura para anaerobios.",
    theme: "Antibioticos",
    area: "Odontologia",
  },
  {
    id: "atb-endocardite-profilaxia-alergia",
    type: "prevencao",
    question: "Qual antibiotico usar para profilaxia de endocardite em procedimento de alto risco quando o paciente tem alergia a penicilina?",
    answer:
      "Cefalexina se alergia nao grave; se anafilaxia ou alergia grave, usar alternativa nao beta-lactamica conforme protocolo local. A profilaxia e restrita a pacientes cardiacos de alto risco.",
    theme: "Antibioticos",
    area: "Cardiologia",
    difficulty: "medio",
  },
  {
    id: "atb-impetigo-crianca-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiotico de 1a escolha para impetigo em crianca sem alergia a beta-lactamicos?",
    answer:
      "Mupirocina topica se lesoes limitadas ou cefalexina 25-50 mg/kg/dia VO dividida a cada 6 horas por 7 dias se extenso. Cobre S. aureus e estreptococos.",
    theme: "Antibioticos",
    area: "Pediatria",
  },
  {
    id: "atb-impetigo-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico usar para impetigo em paciente com alergia grave a penicilina ou cefalosporina?",
    answer:
      "Clindamicina ou sulfametoxazol-trimetoprima. Sao opcoes sem beta-lactamicos; SMZ-TMP e util se houver suspeita de MRSA, mas a cobertura estreptococica pode ser inferior.",
    theme: "Antibioticos",
    area: "Dermatologia",
  },
  {
    id: "atb-erisipela-sem-alergia",
    type: "medicamento",
    question: "Qual antibiotico de 1a escolha para erisipela em adulto sem alergia?",
    answer:
      "Penicilina V 500 mg VO 4 vezes ao dia ou cefalexina 500 mg a cada 6 horas por 7-10 dias. O alvo principal e estreptococo.",
    theme: "Antibioticos",
    area: "Dermatologia",
  },
  {
    id: "atb-erisipela-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico usar para erisipela em paciente com alergia grave a penicilina?",
    answer:
      "Clindamicina 300-450 mg VO a cada 6 horas por 7-10 dias. Boa opcao para pele e partes moles sem reacao cruzada com beta-lactamicos.",
    theme: "Antibioticos",
    area: "Dermatologia",
  },
  {
    id: "atb-cistite-gestante-sem-alergia",
    type: "medicamento",
    question: "Qual antibiotico de 1a escolha para cistite em gestante sem alergia?",
    answer:
      "Cefalexina 500 mg VO a cada 6 horas por 7 dias. Nitrofurantoina tambem pode ser opcao conforme idade gestacional e contexto.",
    theme: "Antibioticos",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "atb-cistite-gestante-alergia-grave",
    type: "medicamento",
    question: "Qual alternativa para cistite em gestante com alergia grave a beta-lactamicos?",
    answer:
      "Nitrofurantoina 100 mg VO a cada 6 horas por 5-7 dias, evitando perto do parto e usando cautela conforme trimestre e contexto clinico.",
    theme: "Antibioticos",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "atb-pac-comorbidades-sem-alergia",
    type: "medicamento",
    question: "Qual antibiotico de 1a escolha para PAC moderada em paciente com comorbidades como DPOC ou diabetes, sem alergia?",
    answer:
      "Amoxicilina-clavulanato 875/125 mg VO a cada 12 horas por 5-7 dias, com ou sem cobertura para atipicos conforme avaliacao. Cobre melhor Haemophilus e outros patogenos em comorbidos.",
    theme: "Antibioticos",
    area: "Pneumologia",
  },
  {
    id: "atb-pac-comorbidades-alergia-grave",
    type: "medicamento",
    question: "Qual antibiotico usar na PAC moderada em paciente com comorbidades e alergia grave a penicilina?",
    answer:
      "Levofloxacino 750 mg VO 1 vez ao dia por 5 dias. Cobre pneumococo, atipicos e alguns gram-negativos, mas deve ser reservado quando alternativas mais seguras nao forem adequadas.",
    theme: "Antibioticos",
    area: "Pneumologia",
  },
  {
    id: "atb-profilaxia-cirurgica-limpa",
    type: "prevencao",
    question: "Qual antibiotico de 1a escolha para profilaxia cirurgica em cirurgia limpa, como hernia, em paciente sem alergia?",
    answer:
      "Cefazolina 2 g IV dose unica 30-60 minutos antes da incisao. E uma cefalosporina de 1a geracao adequada para flora de pele.",
    theme: "Antibioticos",
    area: "Cirurgia",
  },

  // Classes farmacologicas
  {
    id: "classe-isrs-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos inibidores seletivos da recaptacao de serotonina?",
    answer:
      "Escitalopram, sertralina, fluoxetina, paroxetina e citalopram. Sao primeira linha para depressao e ansiedade, com melhor tolerabilidade que triciclicos.",
    theme: "Classes farmacologicas",
    area: "Psiquiatria",
  },
  {
    id: "classe-ieca-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos inibidores da enzima conversora de angiotensina?",
    answer:
      "Enalapril, captopril, ramipril, lisinopril e perindopril. Usados em hipertensao, insuficiencia cardiaca e nefroprotecao; tosse seca e efeito comum.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-bra-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos bloqueadores do receptor de angiotensina II?",
    answer:
      "Losartana, valsartana, candesartana, olmesartana e telmisartana. Sao alternativas ao IECA quando ha tosse e ajudam em hipertensao com diabetes.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-betabloqueadores-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos betabloqueadores?",
    answer:
      "Atenolol, propranolol, metoprolol, carvedilol e bisoprolol. Usados em hipertensao, angina, insuficiencia cardiaca e pos-infarto; cautela em asma.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-bloqueadores-calcio-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos bloqueadores dos canais de calcio?",
    answer:
      "Anlodipino, nifedipino, diltiazem e verapamil. Anlodipino e comum em hipertensao; diltiazem e verapamil tambem ajudam no controle de frequencia.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-ibp-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos inibidores da bomba de protons?",
    answer:
      "Omeprazol, pantoprazol, esomeprazol, lansoprazol e rabeprazol. Reduzem fortemente acido gastrico; usar pelo menor tempo necessario.",
    theme: "Classes farmacologicas",
    area: "Gastroenterologia",
  },
  {
    id: "classe-biguanidas-principais",
    type: "medicamento",
    question: "Qual e o principal medicamento da classe das biguanidas?",
    answer:
      "Metformina. E a principal biguanida usada no diabetes tipo 2, reduzindo a producao hepatica de glicose e melhorando sensibilidade a insulina.",
    theme: "Classes farmacologicas",
    area: "Endocrinologia",
  },
  {
    id: "classe-sulfonilureias-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe das sulfonilureias?",
    answer:
      "Glibenclamida, glimepirida e gliclazida. Estimulam liberacao de insulina e podem causar hipoglicemia, especialmente em idosos.",
    theme: "Classes farmacologicas",
    area: "Endocrinologia",
  },
  {
    id: "classe-estatinas-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe das estatinas?",
    answer:
      "Sinvastatina, atorvastatina, rosuvastatina e pravastatina. Reduzem LDL e sao base da prevencao cardiovascular.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-saba-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos agonistas beta-2 de acao curta?",
    answer:
      "Salbutamol e fenoterol. Sao broncodilatadores de resgate em crise de asma ou DPOC.",
    theme: "Classes farmacologicas",
    area: "Pneumologia",
  },
  {
    id: "classe-laba-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos agonistas beta-2 de acao longa?",
    answer:
      "Formoterol e salmeterol. Sao usados na manutencao de asma e DPOC, geralmente combinados a corticoide inalatorio; evitar monoterapia na asma.",
    theme: "Classes farmacologicas",
    area: "Pneumologia",
  },
  {
    id: "classe-corticoides-inalados-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos corticoides inalados?",
    answer:
      "Budesonida, fluticasona, beclometasona e mometasona. Controlam inflamacao em asma e alguns casos de DPOC.",
    theme: "Classes farmacologicas",
    area: "Pneumologia",
  },
  {
    id: "classe-aines-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos anti-inflamatorios nao esteroides?",
    answer:
      "Ibuprofeno, diclofenaco, naproxeno, meloxicam e cetoprofeno. Usados para dor e inflamacao; evitar em ulcera, insuficiencia renal e insuficiencia cardiaca.",
    theme: "Classes farmacologicas",
    area: "Farmacologia",
  },
  {
    id: "classe-opioides-fracos-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos opioides fracos?",
    answer:
      "Codeina e tramadol. Usados para dor moderada; tramadol tambem atua na recaptacao de serotonina e noradrenalina.",
    theme: "Classes farmacologicas",
    area: "Dor",
  },
  {
    id: "classe-benzodiazepinicos-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos benzodiazepinicos?",
    answer:
      "Diazepam, alprazolam, clonazepam, lorazepam e midazolam. Usados em ansiedade, insonia, sedacao e convulsoes; risco de dependencia e quedas.",
    theme: "Classes farmacologicas",
    area: "Psiquiatria",
  },
  {
    id: "classe-inibidores-colinesterase-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos inibidores da colinesterase usados em Alzheimer?",
    answer:
      "Donepezila, rivastigmina e galantamina. Podem oferecer melhora cognitiva sintomatica em quadros leves a moderados.",
    theme: "Classes farmacologicas",
    area: "Neurologia",
  },
  {
    id: "classe-macrolideos-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe dos macrolideos?",
    answer:
      "Azitromicina, claritromicina e eritromicina. Têm cobertura para atipicos e alguns gram-positivos; azitromicina permite esquemas curtos.",
    theme: "Classes farmacologicas",
    area: "Infectologia",
  },
  {
    id: "classe-fluoroquinolonas-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe das fluoroquinolonas?",
    answer:
      "Ciprofloxacino, levofloxacino, moxifloxacino e norfloxacino. Usadas em algumas infeccoes urinarias e respiratorias; reservar pelo risco de eventos adversos.",
    theme: "Classes farmacologicas",
    area: "Infectologia",
  },
  {
    id: "classe-cefalosporinas-primeira-principais",
    type: "medicamento",
    question: "Quais sao os principais medicamentos da classe das cefalosporinas de 1a geracao?",
    answer:
      "Cefalexina, cefadroxil e cefazolina IV. Têm boa cobertura para gram-positivos, pele e infeccoes simples.",
    theme: "Classes farmacologicas",
    area: "Infectologia",
  },

  // Diferencas conceituais simples
  {
    id: "dif-fratura-luxacao",
    type: "diagnostico",
    question: "Qual a diferenca entre fratura e luxacao?",
    answer:
      "Fratura e quebra ou fissura do osso. Luxacao e deslocamento completo das superficies articulares, com perda de congruencia. Luxacao pode comprimir vasos e nervos.",
    theme: "Diferencas conceituais",
    area: "Ortopedia",
  },
  {
    id: "dif-entorse-luxacao",
    type: "diagnostico",
    question: "Qual a diferenca entre entorse e luxacao?",
    answer:
      "Entorse e lesao ligamentar por alongamento ou ruptura. Luxacao e deslocamento completo da articulacao. Entorse costuma ser mais comum e muitas vezes conservadora.",
    theme: "Diferencas conceituais",
    area: "Ortopedia",
  },
  {
    id: "dif-contusao-hematoma",
    type: "diagnostico",
    question: "Qual a diferenca entre contusao e hematoma?",
    answer:
      "Contusao e lesao tecidual por trauma sem corte na pele. Hematoma e uma colecao localizada de sangue extravasado.",
    theme: "Diferencas conceituais",
    area: "Clinica medica",
  },
  {
    id: "dif-urticaria-angioedema",
    type: "diagnostico",
    question: "Qual a diferenca entre urticaria e angioedema?",
    answer:
      "Urticaria sao placas eritematosas superficiais e pruriginosas. Angioedema e edema profundo na derme ou subcutaneo, podendo afetar labios, palpebras e vias aereas.",
    theme: "Diferencas conceituais",
    area: "Dermatologia",
  },
  {
    id: "dif-eczema-dermatite-contato",
    type: "diagnostico",
    question: "Qual a diferenca entre eczema e dermatite de contato?",
    answer:
      "Eczema e termo generico para inflamacao cutanea pruriginosa e descamativa. Dermatite de contato e reacao especifica a irritante ou alergeno.",
    theme: "Diferencas conceituais",
    area: "Dermatologia",
  },
  {
    id: "dif-dispneia-taquipneia",
    type: "diagnostico",
    question: "Qual a diferenca entre dispneia e taquipneia?",
    answer:
      "Dispneia e sensacao subjetiva de falta de ar. Taquipneia e aumento objetivo da frequencia respiratoria, geralmente acima de 20 irpm no adulto.",
    theme: "Diferencas conceituais",
    area: "Semiologia",
  },
  {
    id: "dif-choque-hipotensao",
    type: "diagnostico",
    question: "Qual a diferenca entre choque e hipotensao?",
    answer:
      "Hipotensao e pressao arterial baixa. Choque e hipoperfusao tecidual, com sinais como confusao, oliguria e pele fria, podendo ou nao cursar com hipotensao inicial.",
    theme: "Diferencas conceituais",
    area: "Emergencia",
  },
  {
    id: "dif-edema-linfedema",
    type: "diagnostico",
    question: "Qual a diferenca entre edema e linfedema?",
    answer:
      "Edema e acumulo de liquido intersticial por varias causas. Linfedema ocorre por falha ou obstrucao linfatica, tende a ser cronico e pode formar menos cacifo.",
    theme: "Diferencas conceituais",
    area: "Clinica medica",
  },
  {
    id: "dif-ulcera-erosao",
    type: "diagnostico",
    question: "Qual a diferenca entre ulcera e erosao cutanea?",
    answer:
      "Erosao e perda superficial da epiderme e costuma cicatrizar sem cicatriz. Ulcera atinge derme ou subcutaneo e tende a cicatrizar com cicatriz.",
    theme: "Diferencas conceituais",
    area: "Dermatologia",
  },
  {
    id: "dif-sincope-pre-sincope",
    type: "diagnostico",
    question: "Qual a diferenca entre sincope e pre-sincope?",
    answer:
      "Sincope e perda transitoria da consciencia por hipoperfusao cerebral. Pre-sincope e sensacao de desmaio iminente sem perda completa da consciencia.",
    theme: "Diferencas conceituais",
    area: "Semiologia",
  },
  {
    id: "dif-gastrite-ulcera",
    type: "diagnostico",
    question: "Qual a diferenca entre gastrite e ulcera peptica?",
    answer:
      "Gastrite e inflamacao da mucosa gastrica. Ulcera e lesao que ultrapassa a muscular da mucosa, com maior risco de sangramento e perfuracao.",
    theme: "Diferencas conceituais",
    area: "Gastroenterologia",
  },
  {
    id: "dif-asma-dpoc-exacerbada",
    type: "diagnostico",
    question: "Qual a diferenca entre crise asmatica e DPOC exacerbada?",
    answer:
      "Asma costuma ter obstrucao reversivel, muitas vezes em jovens e atopicos. DPOC costuma ter obstrucao pouco reversivel, associada a tabagismo e idade acima de 40 anos.",
    theme: "Diferencas conceituais",
    area: "Pneumologia",
  },
  {
    id: "dif-hipertensao-crise-hipertensiva",
    type: "diagnostico",
    question: "Qual a diferenca entre hipertensao arterial e crise hipertensiva?",
    answer:
      "Hipertensao e elevacao cronica da PA. Crise hipertensiva envolve PA muito elevada, geralmente >180/120, com ou sem lesao aguda de orgao-alvo; emergencia ocorre quando ha lesao aguda.",
    theme: "Diferencas conceituais",
    area: "Cardiologia",
  },
  {
    id: "dif-artrite-artrose",
    type: "diagnostico",
    question: "Qual a diferenca entre artrite e artrose?",
    answer:
      "Artrite e inflamacao articular. Artrose e desgaste degenerativo da cartilagem. Artrite costuma ter sinais inflamatorios; artrose piora com uso.",
    theme: "Diferencas conceituais",
    area: "Reumatologia",
  },
  {
    id: "dif-convulsao-epilepsia",
    type: "diagnostico",
    question: "Qual a diferenca entre convulsao e epilepsia?",
    answer:
      "Convulsao e um evento por descarga eletrica anormal. Epilepsia e tendencia a crises recorrentes, geralmente definida por duas ou mais crises nao provocadas.",
    theme: "Diferencas conceituais",
    area: "Neurologia",
  },
  {
    id: "dif-celulite-erisipela",
    type: "diagnostico",
    question: "Qual a diferenca entre celulite e erisipela?",
    answer:
      "Celulite acomete derme profunda e subcutaneo, com bordas mal definidas. Erisipela e mais superficial, com bordas elevadas e bem definidas.",
    theme: "Diferencas conceituais",
    area: "Dermatologia",
  },
  {
    id: "dif-diarreia-disenteria",
    type: "diagnostico",
    question: "Qual a diferenca entre diarreia aguda e disenteria?",
    answer:
      "Diarreia e aumento do numero de evacuacoes com fezes amolecidas. Disenteria e diarreia com sangue e muco, sugerindo processo invasivo.",
    theme: "Diferencas conceituais",
    area: "Gastroenterologia",
  },
  {
    id: "dif-ictericia-colestase",
    type: "diagnostico",
    question: "Qual a diferenca entre ictericia e colestase?",
    answer:
      "Ictericia e coloracao amarelada por bilirrubina elevada. Colestase e reducao do fluxo biliar, geralmente com bilirrubina direta alta, prurido, coluria e fezes claras.",
    theme: "Diferencas conceituais",
    area: "Gastroenterologia",
  },
  {
    id: "dif-icc-edema-agudo-pulmao",
    type: "diagnostico",
    question: "Qual a diferenca entre insuficiencia cardiaca e edema agudo de pulmao?",
    answer:
      "Insuficiencia cardiaca e sindrome de baixa saida ou congestao, muitas vezes cronica. Edema agudo de pulmao e descompensacao aguda com liquido nos alveolos.",
    theme: "Diferencas conceituais",
    area: "Cardiologia",
  },
  {
    id: "dif-hipoglicemia-choque-hipoglicemico",
    type: "diagnostico",
    question: "Qual a diferenca entre hipoglicemia e choque hipoglicemico?",
    answer:
      "Hipoglicemia e glicemia baixa, geralmente <70 mg/dL. Choque hipoglicemico e hipoglicemia grave com alteracao de consciencia, convulsao ou incapacidade de ingerir carboidrato.",
    theme: "Diferencas conceituais",
    area: "Endocrinologia",
  },

  // Contraindicacoes e razoes praticas
  {
    id: "contra-aines-ulcera-sangramento",
    type: "medicamento",
    question: "Por que AINEs devem ser evitados em pacientes com ulcera peptica ou sangramento digestivo?",
    answer:
      "Inibem COX-1, reduzem prostaglandinas protetoras da mucosa gastrica e prejudicam agregacao plaquetaria, aumentando risco de ulcera e hemorragia.",
    theme: "Contraindicacoes",
    area: "Farmacologia",
  },
  {
    id: "contra-betabloqueador-asma",
    type: "medicamento",
    question: "Por que betabloqueadores sao contraindicados ou usados com muita cautela em asma bronquica grave?",
    answer:
      "Podem bloquear receptores beta-2 bronquiais e causar broncoconstricao. Cardiosseletivos podem ser considerados apenas em casos selecionados e com cautela.",
    theme: "Contraindicacoes",
    area: "Farmacologia",
  },
  {
    id: "contra-aines-insuficiencia-renal",
    type: "medicamento",
    question: "Por que AINEs devem ser evitados em insuficiencia renal aguda ou cronica?",
    answer:
      "Inibem prostaglandinas renais que mantem a dilatacao da arteriola aferente, reduzindo filtracao glomerular e podendo piorar rapidamente a funcao renal.",
    theme: "Contraindicacoes",
    area: "Nefrologia",
  },
  {
    id: "contra-anticoncepcional-fumante-35",
    type: "medicamento",
    question: "Por que anticoncepcionais orais combinados sao contraindicados em fumantes acima de 35 anos?",
    answer:
      "O estrogenio aumenta risco trombotico, e o tabagismo soma risco arterial e venoso, elevando chance de trombose, infarto e AVC.",
    theme: "Contraindicacoes",
    area: "Ginecologia",
  },
  {
    id: "contra-tetraciclina-crianca-gestante",
    type: "medicamento",
    question: "Por que tetraciclinas, como doxiciclina, sao evitadas em criancas menores de 8 anos e gestantes?",
    answer:
      "Podem se depositar em dentes e ossos em formacao, causando coloracao dentaria permanente e efeitos no desenvolvimento osseo.",
    theme: "Contraindicacoes",
    area: "Farmacologia",
  },
  {
    id: "contra-ibp-uso-prolongado",
    type: "medicamento",
    question: "Por que o uso prolongado de IBP, como omeprazol e pantoprazol, deve ser reavaliado?",
    answer:
      "Uso prolongado pode aumentar risco de infeccao por C. difficile, fraturas, hipomagnesemia e pneumonia. A ideia e usar menor dose pelo menor tempo necessario.",
    theme: "Contraindicacoes",
    area: "Gastroenterologia",
  },
  {
    id: "contra-anti-histaminico-primeira-idoso",
    type: "medicamento",
    question: "Por que anti-histaminicos de 1a geracao sao evitados em idosos?",
    answer:
      "Têm efeito anticolinergico importante, podendo causar confusao, delirium, retencao urinaria, boca seca e quedas. Preferir opcoes de 2a geracao quando possivel.",
    theme: "Contraindicacoes",
    area: "Geriatria",
  },
  {
    id: "contra-varfarina-inr",
    type: "medicamento",
    question: "Por que a varfarina precisa de monitoramento rigoroso do INR?",
    answer:
      "Tem janela terapeutica estreita e muitas interacoes medicamentosas e alimentares, especialmente com vitamina K. Sem controle, aumenta risco de sangramento ou trombose.",
    theme: "Contraindicacoes",
    area: "Cardiologia",
  },
  {
    id: "contra-fluoroquinolonas-gestantes-criancas",
    type: "medicamento",
    question: "Por que fluoroquinolonas sao evitadas em gestantes e criancas?",
    answer:
      "Ha preocupacao com efeitos em cartilagens de crescimento, artralgias e tendinopatias. Reservar para situacoes em que nao ha alternativa adequada.",
    theme: "Contraindicacoes",
    area: "Farmacologia",
  },
  {
    id: "contra-metformina-tfg-baixa",
    type: "medicamento",
    question: "Por que metformina e contraindicada em insuficiencia renal grave, como TFG <30 mL/min?",
    answer:
      "Pode acumular e aumentar risco de acidose lactica. Tambem deve ser pausada temporariamente em desidratacao grave ou alguns contextos de contraste iodado.",
    theme: "Contraindicacoes",
    area: "Endocrinologia",
  },
  {
    id: "contra-codeina-tramadol-crianca",
    type: "medicamento",
    question: "Por que codeina e tramadol devem ser evitados em criancas menores de 12 anos?",
    answer:
      "O metabolismo via CYP2D6 e variavel, podendo gerar niveis imprevisiveis e risco de depressao respiratoria grave.",
    theme: "Contraindicacoes",
    area: "Pediatria",
  },
  {
    id: "contra-ieca-bra-gravidez",
    type: "medicamento",
    question: "Por que IECA e BRA sao contraindicados na gravidez?",
    answer:
      "Podem causar toxicidade fetal, alteracoes renais fetais, oligoidramnio e outros danos. Devem ser trocados por antihipertensivos seguros na gestacao.",
    theme: "Contraindicacoes",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "contra-estatina-gravidez",
    type: "medicamento",
    question: "Por que estatinas sao evitadas na gravidez?",
    answer:
      "Nao sao usadas de rotina na gestacao por preocupacao com toxicidade fetal e por nao serem essenciais durante esse periodo na maioria dos casos.",
    theme: "Contraindicacoes",
    area: "Cardiologia",
  },
  {
    id: "contra-clindamicina-cdiff",
    type: "medicamento",
    question: "Por que clindamicina e antibioticos de amplo espectro aumentam risco de diarreia por C. difficile?",
    answer:
      "Alteram a microbiota intestinal e permitem proliferacao de C. difficile. O risco e classico com clindamicina, fluoroquinolonas e cefalosporinas.",
    theme: "Contraindicacoes",
    area: "Infectologia",
  },
  {
    id: "contra-digoxina-idoso-renal",
    type: "medicamento",
    question: "Por que digoxina deve ser usada com cautela em idosos e pacientes com insuficiencia renal?",
    answer:
      "Eliminacao renal reduzida aumenta risco de acumulo e intoxicacao, com arritmias, nauseas, confusao e alteracoes visuais.",
    theme: "Contraindicacoes",
    area: "Cardiologia",
  },
  {
    id: "contra-aines-insuficiencia-cardiaca",
    type: "medicamento",
    question: "Por que AINEs sao contraindicados na insuficiencia cardiaca descompensada?",
    answer:
      "Podem causar retencao de sodio e agua e elevar a pressao arterial, piorando congestao e descompensacao.",
    theme: "Contraindicacoes",
    area: "Cardiologia",
  },
  {
    id: "contra-sulfonilureia-idoso-fragil",
    type: "medicamento",
    question: "Por que sulfonilureias, como glibenclamida, sao evitadas em idosos frageis?",
    answer:
      "Aumentam risco de hipoglicemia prolongada e grave, especialmente com baixa ingesta, insuficiencia renal ou polifarmacia.",
    theme: "Contraindicacoes",
    area: "Endocrinologia",
  },
  {
    id: "contra-aspirina-crianca-virose",
    type: "medicamento",
    question: "Por que aspirina em baixas doses e evitada em criancas com virose?",
    answer:
      "Esta associada a Sindrome de Reye, com encefalopatia e insuficiencia hepatica. Para febre, usar alternativas pediatrica apropriadas.",
    theme: "Contraindicacoes",
    area: "Pediatria",
  },
  {
    id: "contra-isrs-serotoninergicos",
    type: "medicamento",
    question: "Por que ISRS devem ser usados com cautela junto com outros medicamentos serotoninergicos?",
    answer:
      "A combinacao pode causar sindrome serotoninergica, com agitacao, hipertermia, rigidez, taquicardia e instabilidade autonomica.",
    theme: "Contraindicacoes",
    area: "Psiquiatria",
  },

  // Anatomia basica
  {
    id: "anat-ponto-ausculta-mitral",
    type: "clinico",
    question: "Onde se localiza o ponto de ausculta da valva mitral?",
    answer:
      "No 5o espaco intercostal esquerdo, na linha hemiclavicular, proximo ao apice cardiaco. E o melhor ponto para sopros mitrais.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-apendice",
    type: "clinico",
    question: "Qual a localizacao anatomica classica do apendice vermiforme?",
    answer:
      "Quadrante inferior direito, proximo ao ponto de McBurney, entre a espinha iliaca antero-superior direita e o umbigo. Dor nesse ponto sugere apendicite.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-manguito-rotador",
    type: "clinico",
    question: "Quais sao os principais musculos do manguito rotador?",
    answer:
      "Supraespinal, infraespinal, redondo menor e subescapular. Mnemomico: SITS. Estabilizam o ombro e sao frequentes em tendinopatias.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-traqueia-esofago",
    type: "clinico",
    question: "Qual a diferenca anatomica entre traqueia e esofago?",
    answer:
      "Traqueia e anterior, cartilaginosa e tem aneis em C. Esofago e posterior, muscular e sem cartilagem. Importante para intubacao e endoscopia.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-trigemeo-sensibilidade-face",
    type: "clinico",
    question: "Qual nervo e responsavel pela sensibilidade da face?",
    answer:
      "Nervo trigemeo, V par craniano, com ramos oftalmico, maxilar e mandibular. E importante na neuralgia do trigemeo.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-flexor-quadril",
    type: "clinico",
    question: "Qual musculo e o principal flexor do quadril?",
    answer:
      "Iliopsoas, formado pelo psoas maior e iliaco. E testado indiretamente no sinal do psoas em apendicite retrocecal.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-hernias-inguinais",
    type: "clinico",
    question: "Onde se localiza a regiao inguinal relacionada a hernias?",
    answer:
      "Acima do ligamento inguinal. A hernia direta ocorre no triangulo de Hesselbach; a indireta passa pelo canal inguinal.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-cerebral-anterior",
    type: "clinico",
    question: "Qual arteria irriga principalmente a face medial do cerebro anterior?",
    answer:
      "Arteria cerebral anterior, ramo da carotida interna. Lesao pode causar paresia predominante de membro inferior contralateral.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-tireoide",
    type: "clinico",
    question: "Onde se encontra a glandula tireoide?",
    answer:
      "Na regiao cervical anterior, envolvendo a traqueia, geralmente ao nivel dos primeiros aneis traqueais. Nodulos e bocio sao achados comuns.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-veia-cava-inferior",
    type: "clinico",
    question: "Qual e a veia mais calibrosa do organismo?",
    answer:
      "Veia cava inferior. Drena sangue da maior parte do corpo abaixo do diafragma para o atrio direito.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-dorsiflexao-pe",
    type: "clinico",
    question: "Qual nervo e responsavel principalmente pela dorsiflexao do pe?",
    answer:
      "Nervo fibular profundo. Lesao pode causar pe caido e marcha escarvante.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-forame-magno",
    type: "clinico",
    question: "Onde se localiza o forame magno?",
    answer:
      "Na base do cranio, no osso occipital. Permite a passagem da medula espinhal e estruturas neurovasculares.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-pele-epiderme",
    type: "clinico",
    question: "Qual e a camada mais superficial da pele?",
    answer:
      "Epiderme. A derme fica abaixo e contem colageno, vasos, nervos, foliculos e glandulas.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-ligamento-valgo-joelho",
    type: "clinico",
    question: "Qual ligamento estabiliza o joelho contra estresse em valgo?",
    answer:
      "Ligamento colateral medial. E lesionado em traumas com valgo forcado.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },
  {
    id: "anat-baco-costelas",
    type: "clinico",
    question: "Onde se encontra o baco em relacao as costelas?",
    answer:
      "No hipocondrio esquerdo, protegido principalmente pelas costelas 9, 10 e 11. E vulneravel em trauma de flanco esquerdo.",
    theme: "Anatomia basica",
    area: "Anatomia",
  },

  // Pre-natal
  {
    id: "prenatal-frequencia-consultas",
    type: "prevencao",
    question: "Com que frequencia devem ser realizadas consultas de pre-natal em gestante de baixo risco?",
    answer:
      "Mensal ate 28 semanas, quinzenal de 28 a 36 semanas e semanal apos 36 semanas. O minimo e 6 consultas, mas o ideal e mais acompanhamento.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-acido-folico",
    type: "prevencao",
    question: "Qual suplemento e mais importante no inicio da gestacao e por que?",
    answer:
      "Acido folico 400 mcg/dia, ou dose maior em alto risco. Previne defeitos do tubo neural, idealmente iniciado antes da concepcao.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-ferro",
    type: "prevencao",
    question: "Quando deve ser iniciado o sulfato ferroso na gestacao?",
    answer:
      "Geralmente a partir da 14a-20a semana, com 40-60 mg/dia de ferro elementar conforme protocolo. Ajuda a prevenir anemia.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-dtpa",
    type: "prevencao",
    question: "Qual vacina e obrigatoria no pre-natal para proteger contra coqueluche neonatal?",
    answer:
      "dTpa, preferencialmente entre 27 e 36 semanas. Protege o recem-nascido contra coqueluche.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-vdrl",
    type: "rastreamento",
    question: "Qual exame deve ser feito no pre-natal para rastrear sifilis?",
    answer:
      "VDRL ou RPR, com confirmatorio conforme protocolo. Fazer no inicio, repetir no terceiro trimestre e no parto quando indicado.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-hiv",
    type: "rastreamento",
    question: "Quando deve ser realizado o teste de HIV na gestante?",
    answer:
      "No primeiro trimestre e repetido no terceiro trimestre. Teste rapido tambem pode ser feito no momento do parto se necessario.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-usg-primeiro-trimestre",
    type: "rastreamento",
    question: "Qual a idade gestacional ideal para a primeira ultrassonografia com translucencia nucal?",
    answer:
      "Entre 11 e 14 semanas. Ajuda a confirmar idade gestacional e rastrear anomalias.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-diabetes-gestacional",
    type: "rastreamento",
    question: "Quando e feito o rastreamento de diabetes gestacional com teste oral de tolerancia a glicose?",
    answer:
      "Em geral entre 24 e 28 semanas com 75 g de glicose. Em gestantes de alto risco, avaliar rastreio mais precoce.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-sinais-alerta",
    type: "conduta",
    question: "Quais sinais de alerta no pre-natal indicam procurar emergencia?",
    answer:
      "Sangramento vaginal, dor abdominal intensa, diminuicao de movimentos fetais, cefaleia forte, visao turva, dispneia, febre ou inchaco subito.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-aas-preeclampsia",
    type: "prevencao",
    question: "Quando e indicada profilaxia de pre-eclampsia com AAS?",
    answer:
      "Em gestantes de alto risco, geralmente AAS em baixa dose a partir de 12 semanas ate proximo de 36 semanas, conforme protocolo local.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },
  {
    id: "prenatal-conduta-consulta",
    type: "conduta",
    question: "Qual a conduta basica em uma consulta de pre-natal?",
    answer:
      "Aferir PA, peso, revisar queixas, avaliar edema, medir altura uterina quando indicado, auscultar BCF conforme idade gestacional, checar exames e orientar sinais de alerta.",
    theme: "Pre-natal",
    area: "Ginecologia e obstetricia",
  },

  // Pediatria basica
  {
    id: "ped-paracetamol-dose",
    type: "medicamento",
    question: "Qual a posologia de paracetamol para crianca com febre ou dor?",
    answer:
      "10-15 mg/kg/dose a cada 6 horas, respeitando dose maxima diaria. Ajustar por idade, peso, hepatopatia e apresentacao disponivel.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-dipirona-dose",
    type: "medicamento",
    question: "Qual a posologia de dipirona em pediatria?",
    answer:
      "10-15 mg/kg/dose a cada 6 horas, respeitando dose maxima diaria. Usar com cautela em lactentes pequenos conforme protocolo local.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-ferro-profilatico",
    type: "prevencao",
    question: "Quando deve ser iniciada a suplementacao de ferro em lactentes?",
    answer:
      "Geralmente a partir de 4-6 meses, com dose profilatica conforme risco e protocolo. E especialmente importante em aleitamento materno exclusivo.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-pentavalente",
    type: "prevencao",
    question: "Quais doencas a vacina pentavalente cobre e quando e aplicada?",
    answer:
      "Difteria, tetano, coqueluche, Haemophilus influenzae B e hepatite B. No PNI, e aplicada aos 2, 4 e 6 meses.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-bronquiolite-internacao",
    type: "conduta",
    question: "Qual criterio sugere internacao em crianca com bronquiolite?",
    answer:
      "Saturacao baixa, desconforto respiratorio importante, apneia, dificuldade de alimentar, desidratacao ou alto risco clinico. O tratamento principal e suporte.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-introducao-alimentar",
    type: "prevencao",
    question: "Quando iniciar alimentacao complementar no lactente?",
    answer:
      "A partir dos 6 meses completos, mantendo aleitamento materno ate 2 anos ou mais quando possivel.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-peso-estimado",
    type: "clinico",
    question: "Como estimar o peso de criancas de 1 a 10 anos em situacoes praticas?",
    answer:
      "Uma formula aproximada e peso em kg = 2 x idade em anos + 8. Serve para estimativa rapida, mas nao substitui pesagem real.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-diarreia-aguda",
    type: "conduta",
    question: "Qual a principal orientacao na diarreia aguda em crianca?",
    answer:
      "Hidratacao oral com soro de reidratacao oral e manutencao da alimentacao. Nao suspender aleitamento materno.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-desidratacao-grave",
    type: "diagnostico",
    question: "Quando suspeitar de desidratacao grave em crianca?",
    answer:
      "Letargia, olhos encovados, mucosas muito secas, choro sem lagrimas, ma perfusao, incapacidade de beber ou sinais de choque. Requer reidratacao venosa.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-meningite-lactente",
    type: "diagnostico",
    question: "Qual sinal pode sugerir meningite em lactente?",
    answer:
      "Febre com irritabilidade, vomitos, letargia ou fontanela abaulada. Rigidez de nuca pode estar ausente em lactentes.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-asma-crise-leve-moderada",
    type: "conduta",
    question: "Qual a conduta inicial na crise de asma infantil leve a moderada?",
    answer:
      "Salbutamol inalatorio com espacador em doses repetidas, reavaliando resposta. Considerar corticoide sistemico conforme gravidade e resposta.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-marco-2-meses",
    type: "rastreamento",
    question: "Qual marco de desenvolvimento e esperado aos 2 meses?",
    answer:
      "Sorriso social e sustentacao breve da cabeca. Acompanhar marcos ajuda a rastrear atrasos no desenvolvimento.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-ferro-terapeutico",
    type: "medicamento",
    question: "Quando indicar sulfato ferroso em dose terapeutica em crianca?",
    answer:
      "Quando ha anemia ferropriva ou hemoglobina baixa conforme faixa etaria. Dose terapeutica comum: 3-6 mg/kg/dia de ferro elementar.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-obstrucao-nasal-cronica",
    type: "diagnostico",
    question: "Qual causa comum de obstrucao nasal cronica em crianca pre-escolar?",
    answer:
      "Hipertrofia de adenoides. Pode causar ronco, respiracao oral, sono ruim e otites de repeticao.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
  {
    id: "ped-febre-menor-3-meses",
    type: "conduta",
    question: "Qual a orientacao para febre em crianca menor de 3 meses?",
    answer:
      "Febre igual ou maior que 38 graus Celsius deve ser avaliada em servico de emergencia, pelo maior risco de infeccao bacteriana grave.",
    theme: "Pediatria basica",
    area: "Pediatria",
  },
];

export const seedFlashcards: Flashcard[] = cards.map(makeCard);
