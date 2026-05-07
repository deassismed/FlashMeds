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
    question: "Qual é a conduta inicial na crise asmática moderada em adulto na atenção primária?",
    answer:
      "Avaliar gravidade, administrar beta-2 agonista inalatório de curta ação em doses repetidas, considerar ipratrópio e corticoide sistêmico, ofertar oxigênio se saturação baixa e reavaliar resposta clínica.",
    theme: "Asma",
    area: "Pneumologia",
    difficulty: "medio",
    source: "Diretrizes clínicas",
    notes: "Card introdutorio para manejo de exacerbação.",
  },
  {
    id: "card-hipertensao-diagnostico",
    type: "diagnostico",
    question: "Como confirmar o diagnóstico de hipertensão arterial fora de situações de urgencia?",
    answer:
      "Confirmar com medidas repetidas em consultas diferentes ou por MRPA/MAPA, considerando técnica adequada, fatores de risco e lesão de órgão-alvo.",
    theme: "Hipertensão",
    area: "Cardiologia",
    source: "Diretriz Brasileira de Hipertensão",
  },
  {
    id: "card-diabetes-rastreamento",
    type: "rastreamento",
    question: "Quais exames podem ser usados para rastrear diabetes mellitus tipo 2?",
    answer:
      "Glicemia de jejum, hemoglobina glicada e teste oral de tolerância a glicose podem ser utilizados conforme contexto clínico e disponibilidade.",
    theme: "Diabetes",
    area: "Endocrinologia",
    source: "Protocolos de atenção primária",
  },
  {
    id: "card-itu-antibiotico",
    type: "medicamento",
    question: "Qual informacao deve ser checada antes de escolher antibiótico para cistite não complicada?",
    answer:
      "Checar alergias, gestação, função renal, uso recente de antibióticos, resistência local, sinais de pielonefrite e contraindicações individuais.",
    theme: "Infecção urinária",
    area: "Infectologia",
    difficulty: "medio",
    status: "rascunho",
    source: "Aula MFC",
  },
  {
    id: "card-pre-natal-prevencao",
    type: "prevencao",
    question: "Qual suplementação deve ser lembrada no início do pré-natal de baixo risco?",
    answer:
      "Ácido fólico no período periconcepcional/início da gestação e ferro conforme recomendações locais, além de avaliar vacinas e exames iniciais.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
    difficulty: "medio",
    source: "Caderno de atenção básica",
  },

  // Posologia de medicamentos comuns
  {
    id: "posologia-cefalexina-adulto",
    type: "medicamento",
    question: "A cefalexina é administrada de quanto em quanto tempo em adultos para infecções comuns?",
    answer:
      "250-500 mg VO a cada 6 horas; em algumas infecções leves, como pele ou cistite não complicada, pode-se usar 500 mg a cada 12 horas. Dose usual total: 1-4 g/dia, em geral por 7-14 dias.",
    theme: "Posologia",
    area: "Farmacologia",
    source: "Bula padrão",
  },
  {
    id: "posologia-ibuprofeno-adulto",
    type: "medicamento",
    question: "Qual a posologia usual do ibuprofeno 600 mg em adulto para dor ou inflamação?",
    answer:
      "600 mg VO a cada 8 horas, com dose máxima de 2.400 mg/dia. Tomar com alimento para reduzir irritação gástrica.",
    theme: "Posologia",
    area: "Farmacologia",
  },
  {
    id: "posologia-dipirona-adulto",
    type: "medicamento",
    question: "A dipirona 500 mg é administrada de quanto em quanto tempo em adultos?",
    answer:
      "500-1.000 mg VO a cada 6 horas, com dose máxima de 4 g/dia. Muito usada no Brasil para dor e febre.",
    theme: "Posologia",
    area: "Farmacologia",
  },
  {
    id: "posologia-amoxicilina-adulto",
    type: "medicamento",
    question: "A amoxicilina é administrada de quanto em quanto tempo em adultos?",
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
      "500-1.000 mg VO a cada 6 horas, com dose máxima de 4 g/dia. Reduzir dose em hepatopatas, etilistas ou idosos frageis.",
    theme: "Posologia",
    area: "Farmacologia",
  },
  {
    id: "posologia-azitromicina-adulto",
    type: "medicamento",
    question: "A azitromicina 500 mg é administrada de qual forma em adultos?",
    answer:
      "500 mg no 1º dia e 250 mg/dia por mais 4 dias, ou 500 mg/dia por 3 dias. O regime é curto pela meia-vida longa.",
    theme: "Posologia",
    area: "Farmacologia",
  },
  {
    id: "posologia-prednisona-asma-dpoc",
    type: "medicamento",
    question: "Qual a dose usual de prednisona em crise de asma ou DPOC?",
    answer:
      "40-60 mg/dia VO por 5-7 dias. Em cursos curtos, geralmente não há necessidade de desmame.",
    theme: "Posologia",
    area: "Pneumologia",
  },

  // Duracao de tratamentos comuns
  {
    id: "duracao-pac-leve",
    type: "conduta",
    question: "O tratamento antibiótico da pneumonia adquirida na comunidade leve dura quantos dias?",
    answer:
      "Em geral, 5-7 dias em casos leves. Casos moderados ou graves costumam exigir 7-10 dias, podendo chegar a 14 dias conforme evolução e resposta clínica.",
    theme: "Duração de tratamento",
    area: "Infectologia",
    source: "Diretrizes SBPT",
  },
  {
    id: "duracao-cistite-cefalexina",
    type: "conduta",
    question: "Quanto tempo dura o tratamento de cistite não complicada com cefalexina?",
    answer:
      "Em geral, 7-14 dias. Ajustar conforme perfil da paciente, gravidade, cultura, resistência local e resposta clínica.",
    theme: "Duração de tratamento",
    area: "Infectologia",
  },
  {
    id: "duracao-sinusite-bacteriana",
    type: "conduta",
    question: "O tratamento de sinusite bacteriana aguda dura quantos dias?",
    answer:
      "Em adultos com quadro leve, costuma durar 5-7 dias com amoxicilina ou amoxicilina-clavulanato. Prolongar ou reavaliar se não houver melhora.",
    theme: "Duração de tratamento",
    area: "Infectologia",
  },
  {
    id: "duracao-faringotonsilite-estreptococica",
    type: "conduta",
    question: "Quanto tempo dura o tratamento de faringotonsilite estreptocócica com penicilina?",
    answer:
      "10 dias com penicilina V, por exemplo 500 mg VO 3 vezes ao dia. O objetivo é erradicar o Streptococcus pyogenes e prevenir febre reumática.",
    theme: "Duração de tratamento",
    area: "Infectologia",
  },
  {
    id: "duracao-otite-media-crianca",
    type: "conduta",
    question: "O tratamento de otite media aguda em criança dura quantos dias?",
    answer:
      "5-10 dias com amoxicilina. Pode ser 5 dias em crianças maiores de 2 anos com quadro leve; 10 dias em menores de 2 anos ou quadros graves.",
    theme: "Duração de tratamento",
    area: "Pediatria",
  },
  {
    id: "duracao-pielonefrite-nao-complicada",
    type: "conduta",
    question: "Quanto tempo de antibiótico é usado na pielonefrite não complicada?",
    answer:
      "Em geral, 7-14 dias, conforme antibiótico escolhido, gravidade e cultura. Sempre solicitar urocultura quando possível.",
    theme: "Duração de tratamento",
    area: "Infectologia",
  },
  {
    id: "duracao-tinea-pedis",
    type: "conduta",
    question: "Qual a duração tipica do tratamento com antifungico tópico para tínea pedis?",
    answer:
      "2-4 semanas com terbinafina ou clotrimazol. Em geral, manter por cerca de 1 semana após melhora clínica para reduzir recidiva.",
    theme: "Duração de tratamento",
    area: "Dermatologia",
  },

  // Antibioticos: primeira escolha e alternativas por cenario
  {
    id: "atb-faringotonsilite-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiótico de 1ª escolha para faringotonsilite estreptocócica em paciente sem alergia a penicilina?",
    answer:
      "Penicilina V 500 mg VO 3 vezes ao dia por 10 dias ou penicilina benzatina 1.200.000 UI IM dose única em adultos. É o padrão-ouro e previne febre reumática.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-faringotonsilite-alergia-nao-grave",
    type: "medicamento",
    question: "Qual opção usar na faringotonsilite estreptocócica quando o paciente tem alergia não grave a penicilina e precisa de alternativa a penicilina V ou benzatina?",
    answer:
      "Cefalexina é uma alternativa prática; em alguns cenários pode-se usar amoxicilina se a história não sugerir alergia verdadeira. O motivo é a baixa chance de reação cruzada em alergias não graves.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-faringotonsilite-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico usar para faringotonsilite estreptocócica quando o paciente tem alergia grave ou anafilaxia a penicilina?",
    answer:
      "Azitromicina 500 mg no 1º dia e 250 mg/dia por mais 4 dias, ou outro macrolídeo. Evita beta-lactâmicos, embora tenha maior risco de resistência.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-otite-crianca-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiótico de 1ª escolha para otite media aguda em criança sem alergia a beta-lactâmicos?",
    answer:
      "Amoxicilina 50-90 mg/kg/dia VO, dividida a cada 8 ou 12 horas, por 5-10 dias. Usa-se dose alta para cobrir pneumococo resistente.",
    theme: "Antibióticos",
    area: "Pediatria",
  },
  {
    id: "atb-otite-crianca-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico usar para otite media aguda em criança com alergia grave a penicilina?",
    answer:
      "Azitromicina 10 mg/kg/dia por 3-5 dias. É uma opção segura por evitar beta-lactâmicos, mas pode ser menos eficaz contra pneumococo resistente.",
    theme: "Antibióticos",
    area: "Pediatria",
  },
  {
    id: "atb-sinusite-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiótico de 1ª escolha para sinusite bacteriana aguda em adulto sem alergia?",
    answer:
      "Amoxicilina ou amoxicilina-clavulanato 500/125 mg VO a cada 8 horas por 5-7 dias. Preferir amoxicilina-clavulanato se houver falha previa ou maior risco de beta-lactamase.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-sinusite-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico usar para sinusite bacteriana aguda em adulto com alergia grave a penicilina?",
    answer:
      "Doxiciclina 100 mg VO a cada 12 horas por 5-7 dias, ou levofloxacino em situações selecionadas. Não há reação cruzada com beta-lactâmicos e cobre patógenos respiratórios comuns.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-pac-leve-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiótico de 1ª escolha ambulatorial para PAC leve sem comorbidades e sem alergia?",
    answer:
      "Amoxicilina 1 g VO a cada 8 horas por 5-7 dias. Em baixo risco, a monoterapia beta-lactâmica cobre bem pneumococo.",
    theme: "Antibióticos",
    area: "Pneumologia",
  },
  {
    id: "atb-pac-leve-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico usar na PAC leve ambulatorial quando o paciente tem alergia grave a beta-lactâmicos?",
    answer:
      "Levofloxacino ou moxifloxacino. São fluoroquinolonas respiratórias com cobertura para pneumococo e atípicos, mas devem ser reservadas pelo risco de tendinopatia, QT longo e C. difficile.",
    theme: "Antibióticos",
    area: "Pneumologia",
  },
  {
    id: "atb-cistite-mulher-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiótico de 1ª escolha para cistite não complicada em mulher adulta sem alergia?",
    answer:
      "Nitrofurantoína 100 mg VO a cada 6 horas por 5 dias ou fosfomicina 3 g dose única. São opções de menor espectro e ajudam a preservar fluoroquinolonas.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-pielonefrite-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiótico de 1ª escolha para pielonefrite não complicada em mulher adulta sem alergia?",
    answer:
      "Ciprofloxacino 500 mg VO a cada 12 horas por 7-14 dias, se sensibilidade local permitir. Sempre solicitar cultura, pois a escolha deve ser guiada por resistência.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-celulite-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico usar para celulite ou erisipela não complicada em paciente com alergia grave a penicilina?",
    answer:
      "Clindamicina 300-450 mg VO a cada 6 horas por 7-10 dias. Cobre estreptococos e S. aureus sem usar beta-lactâmicos; considerar MRSA conforme contexto.",
    theme: "Antibióticos",
    area: "Dermatologia",
  },
  {
    id: "atb-mordida-humana-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico usar para infecção de partes moles com risco de anaeróbios, como mordida humana, em paciente com alergia grave a penicilina?",
    answer:
      "Clindamicina + ciprofloxacino, ou moxifloxacino em monoterapia em adultos selecionados. A combinação cobre aeróbios e anaeróbios sem beta-lactâmicos.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-pneumonia-atipica",
    type: "medicamento",
    question: "Qual o antibiótico de 1ª escolha para pneumonia atipica por suspeita de Mycoplasma ou Chlamydophila?",
    answer:
      "Azitromicina 500 mg VO no 1º dia e 250 mg/dia por mais 4 dias. Alternativas: claritromicina ou doxiciclina, que também cobre atípicos.",
    theme: "Antibióticos",
    area: "Pneumologia",
  },
  {
    id: "atb-itu-crianca",
    type: "medicamento",
    question: "Qual antibiótico de 1ª escolha para cistite em criança, considerando idade, peso e cultura?",
    answer:
      "Amoxicilina-clavulanato ou cefalexina, ajustando por peso e sensibilidade. Em alergia grave, considerar nitrofurantoína se idade permitir e evitar fluoroquinolonas na rotina pediátrica.",
    theme: "Antibióticos",
    area: "Pediatria",
  },
  {
    id: "atb-gonorreia-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiótico de 1ª escolha para gonorreia não complicada em paciente sem alergia?",
    answer:
      "Ceftriaxona 500 mg IM dose única associada a azitromicina 1 g VO dose única, conforme protocolos que cobrem também possível coinfecção por clamídia.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-gonorreia-alergia-cefalosporina",
    type: "medicamento",
    question: "Qual alternativa para gonorreia não complicada em paciente com alergia grave a cefalosporinas?",
    answer:
      "Gentamicina 240 mg IM dose única + azitromicina 2 g VO dose única. Evita cefalosporina e reduz risco de falha por cobertura combinada.",
    theme: "Antibióticos",
    area: "Infectologia",
  },
  {
    id: "atb-diverticulite-sem-alergia",
    type: "medicamento",
    question: "Qual antibiótico de 1ª escolha para diverticulite aguda não complicada em paciente sem alergia?",
    answer:
      "Amoxicilina-clavulanato 875/125 mg VO a cada 12 horas por 7-10 dias. Cobre gram-negativos e anaeróbios.",
    theme: "Antibióticos",
    area: "Gastroenterologia",
  },
  {
    id: "atb-diverticulite-alergia-grave",
    type: "medicamento",
    question: "Qual alternativa para diverticulite aguda em paciente com alergia grave a penicilina?",
    answer:
      "Ciprofloxacino 500 mg VO a cada 12 horas + metronidazol 500 mg a cada 8 horas por 7-10 dias. A combinação cobre gram-negativos e anaeróbios.",
    theme: "Antibióticos",
    area: "Gastroenterologia",
  },
  {
    id: "atb-abscesso-dentario-sem-alergia",
    type: "medicamento",
    question: "Qual antibiótico de 1ª escolha para abscesso dentario ou periapical em paciente sem alergia?",
    answer:
      "Amoxicilina 500 mg VO a cada 8 horas por 5-7 dias; associar clavulanato se quadro grave. Drenagem e controle odontológico são essenciais.",
    theme: "Antibióticos",
    area: "Odontologia",
  },
  {
    id: "atb-abscesso-dentario-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico de 1ª escolha para abscesso dentario em paciente com alergia grave a penicilina?",
    answer:
      "Clindamicina 300-450 mg VO a cada 6 horas por 5-7 dias. Tem boa penetração óssea e cobertura para anaeróbios.",
    theme: "Antibióticos",
    area: "Odontologia",
  },
  {
    id: "atb-endocardite-profilaxia-alergia",
    type: "prevencao",
    question: "Qual antibiótico usar para profilaxia de endocardite em procedimento de alto risco quando o paciente tem alergia a penicilina?",
    answer:
      "Cefalexina se alergia não grave; se anafilaxia ou alergia grave, usar alternativa não beta-lactâmica conforme protocolo local. A profilaxia é restrita a pacientes cardíacos de alto risco.",
    theme: "Antibióticos",
    area: "Cardiologia",
    difficulty: "medio",
  },
  {
    id: "atb-impetigo-crianca-sem-alergia",
    type: "medicamento",
    question: "Qual o antibiótico de 1ª escolha para impetigo em criança sem alergia a beta-lactâmicos?",
    answer:
      "Mupirocina tópica se lesões limitadas ou cefalexina 25-50 mg/kg/dia VO dividida a cada 6 horas por 7 dias se extenso. Cobre S. aureus e estreptococos.",
    theme: "Antibióticos",
    area: "Pediatria",
  },
  {
    id: "atb-impetigo-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico usar para impetigo em paciente com alergia grave a penicilina ou cefalosporina?",
    answer:
      "Clindamicina ou sulfametoxazol-trimetoprima. São opções sem beta-lactâmicos; SMZ-TMP e útil se houver suspeita de MRSA, mas a cobertura estreptocócica pode ser inferior.",
    theme: "Antibióticos",
    area: "Dermatologia",
  },
  {
    id: "atb-erisipela-sem-alergia",
    type: "medicamento",
    question: "Qual antibiótico de 1ª escolha para erisipela em adulto sem alergia?",
    answer:
      "Penicilina V 500 mg VO 4 vezes ao dia ou cefalexina 500 mg a cada 6 horas por 7-10 dias. O alvo principal é estreptococo.",
    theme: "Antibióticos",
    area: "Dermatologia",
  },
  {
    id: "atb-erisipela-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico usar para erisipela em paciente com alergia grave a penicilina?",
    answer:
      "Clindamicina 300-450 mg VO a cada 6 horas por 7-10 dias. Boa opção para pele e partes moles sem reação cruzada com beta-lactâmicos.",
    theme: "Antibióticos",
    area: "Dermatologia",
  },
  {
    id: "atb-cistite-gestante-sem-alergia",
    type: "medicamento",
    question: "Qual antibiótico de 1ª escolha para cistite em gestante sem alergia?",
    answer:
      "Cefalexina 500 mg VO a cada 6 horas por 7 dias. Nitrofurantoína também pode ser opção conforme idade gestacional e contexto.",
    theme: "Antibióticos",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "atb-cistite-gestante-alergia-grave",
    type: "medicamento",
    question: "Qual alternativa para cistite em gestante com alergia grave a beta-lactâmicos?",
    answer:
      "Nitrofurantoína 100 mg VO a cada 6 horas por 5-7 dias, evitando perto do parto e usando cautela conforme trimestre e contexto clínico.",
    theme: "Antibióticos",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "atb-pac-comorbidades-sem-alergia",
    type: "medicamento",
    question: "Qual antibiótico de 1ª escolha para PAC moderada em paciente com comorbidades como DPOC ou diabetes, sem alergia?",
    answer:
      "Amoxicilina-clavulanato 875/125 mg VO a cada 12 horas por 5-7 dias, com ou sem cobertura para atípicos conforme avaliação. Cobre melhor Haemophilus e outros patógenos em comórbidos.",
    theme: "Antibióticos",
    area: "Pneumologia",
  },
  {
    id: "atb-pac-comorbidades-alergia-grave",
    type: "medicamento",
    question: "Qual antibiótico usar na PAC moderada em paciente com comorbidades e alergia grave a penicilina?",
    answer:
      "Levofloxacino 750 mg VO 1 vez ao dia por 5 dias. Cobre pneumococo, atípicos e alguns gram-negativos, mas deve ser reservado quando alternativas mais seguras não forem adequadas.",
    theme: "Antibióticos",
    area: "Pneumologia",
  },
  {
    id: "atb-profilaxia-cirurgica-limpa",
    type: "prevencao",
    question: "Qual antibiótico de 1ª escolha para profilaxia cirurgica em cirurgia limpa, como hernia, em paciente sem alergia?",
    answer:
      "Cefazolina 2 g IV dose única 30-60 minutos antes da incisão. É uma cefalosporina de 1ª geração adequada para flora de pele.",
    theme: "Antibióticos",
    area: "Cirurgia",
  },

  // Classes farmacologicas
  {
    id: "classe-isrs-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos inibidores seletivos da recaptação de serotonina?",
    answer:
      "Escitalopram, sertralina, fluoxetina, paroxetina e citalopram. São primeira linha para depressão e ansiedade, com melhor tolerabilidade que tricíclicos.",
    theme: "Classes farmacologicas",
    area: "Psiquiatria",
  },
  {
    id: "classe-ieca-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos inibidores da enzima conversora de angiotensina?",
    answer:
      "Enalapril, captopril, ramipril, lisinopril e perindopril. Usados em hipertensão, insuficiência cardíaca e nefroproteção; tosse seca e efeito comum.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-bra-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos bloqueadores do receptor de angiotensina II?",
    answer:
      "Losartana, valsartana, candesartana, olmesartana e telmisartana. São alternativas ao IECA quando há tosse e ajudam em hipertensão com diabetes.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-betabloqueadores-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos betabloqueadores?",
    answer:
      "Atenolol, propranolol, metoprolol, carvedilol e bisoprolol. Usados em hipertensão, angina, insuficiência cardíaca e pós-infarto; cautela em asma.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-bloqueadores-calcio-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos bloqueadores dos canais de cálcio?",
    answer:
      "Anlodipino, nifedipino, diltiazem e verapamil. Anlodipino é comum em hipertensão; diltiazem e verapamil também ajudam no controle de frequência.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-ibp-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos inibidores da bomba de prótons?",
    answer:
      "Omeprazol, pantoprazol, esomeprazol, lansoprazol e rabeprazol. Reduzem fortemente ácido gástrico; usar pelo menor tempo necessário.",
    theme: "Classes farmacologicas",
    area: "Gastroenterologia",
  },
  {
    id: "classe-biguanidas-principais",
    type: "medicamento",
    question: "Qual é o principal medicamento da classe das biguanidas?",
    answer:
      "Metformina. É a principal biguanida usada no diabetes tipo 2, reduzindo a produção hepática de glicose e melhorando sensibilidade a insulina.",
    theme: "Classes farmacologicas",
    area: "Endocrinologia",
  },
  {
    id: "classe-sulfonilureias-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe das sulfonilureias?",
    answer:
      "Glibenclamida, glimepirida e gliclazida. Estimulam liberação de insulina e podem causar hipoglicemia, especialmente em idosos.",
    theme: "Classes farmacologicas",
    area: "Endocrinologia",
  },
  {
    id: "classe-estatinas-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe das estatinas?",
    answer:
      "Sinvastatina, atorvastatina, rosuvastatina e pravastatina. Reduzem LDL e são base da prevenção cardiovascular.",
    theme: "Classes farmacologicas",
    area: "Cardiologia",
  },
  {
    id: "classe-saba-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos agonistas beta-2 de ação curta?",
    answer:
      "Salbutamol e fenoterol. São broncodilatadores de resgate em crise de asma ou DPOC.",
    theme: "Classes farmacologicas",
    area: "Pneumologia",
  },
  {
    id: "classe-laba-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos agonistas beta-2 de ação longa?",
    answer:
      "Formoterol e salmeterol. São usados na manutenção de asma e DPOC, geralmente combinados a corticoide inalatório; evitar monoterapia na asma.",
    theme: "Classes farmacologicas",
    area: "Pneumologia",
  },
  {
    id: "classe-corticoides-inalados-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos corticoides inalados?",
    answer:
      "Budesonida, fluticasona, beclometasona e mometasona. Controlam inflamação em asma e alguns casos de DPOC.",
    theme: "Classes farmacologicas",
    area: "Pneumologia",
  },
  {
    id: "classe-aines-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos anti-inflamatórios não esteroides?",
    answer:
      "Ibuprofeno, diclofenaco, naproxeno, meloxicam e cetoprofeno. Usados para dor e inflamação; evitar em úlcera, insuficiência renal e insuficiência cardíaca.",
    theme: "Classes farmacologicas",
    area: "Farmacologia",
  },
  {
    id: "classe-opioides-fracos-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos opioides fracos?",
    answer:
      "Codeína e tramadol. Usados para dor moderada; tramadol também atua na recaptação de serotonina e noradrenalina.",
    theme: "Classes farmacologicas",
    area: "Dor",
  },
  {
    id: "classe-benzodiazepinicos-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos benzodiazepinicos?",
    answer:
      "Diazepam, alprazolam, clonazepam, lorazepam e midazolam. Usados em ansiedade, insônia, sedação e convulsões; risco de dependência e quedas.",
    theme: "Classes farmacologicas",
    area: "Psiquiatria",
  },
  {
    id: "classe-inibidores-colinesterase-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos inibidores da colinesterase usados em Alzheimer?",
    answer:
      "Donepezila, rivastigmina e galantamina. Podem oferecer melhora cognitiva sintomática em quadros leves a moderados.",
    theme: "Classes farmacologicas",
    area: "Neurologia",
  },
  {
    id: "classe-macrolideos-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe dos macrolídeos?",
    answer:
      "Azitromicina, claritromicina e eritromicina. Têm cobertura para atípicos e alguns gram-positivos; azitromicina permite esquemas curtos.",
    theme: "Classes farmacologicas",
    area: "Infectologia",
  },
  {
    id: "classe-fluoroquinolonas-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe das fluoroquinolonas?",
    answer:
      "Ciprofloxacino, levofloxacino, moxifloxacino e norfloxacino. Usadas em algumas infecções urinárias e respiratórias; reservar pelo risco de eventos adversos.",
    theme: "Classes farmacologicas",
    area: "Infectologia",
  },
  {
    id: "classe-cefalosporinas-primeira-principais",
    type: "medicamento",
    question: "Quais são os principais medicamentos da classe das cefalosporinas de 1ª geração?",
    answer:
      "Cefalexina, cefadroxil e cefazolina IV. Têm boa cobertura para gram-positivos, pele e infecções simples.",
    theme: "Classes farmacologicas",
    area: "Infectologia",
  },

  // Diferencas conceituais simples
  {
    id: "dif-fratura-luxacao",
    type: "diagnostico",
    question: "Qual a diferença entre fratura e luxação?",
    answer:
      "Fratura é quebra ou fissura do osso. Luxação é deslocamento completo das superfícies articulares, com perda de congruência. Luxação pode comprimir vasos e nervos.",
    theme: "Diferenças conceituais",
    area: "Ortopedia",
  },
  {
    id: "dif-entorse-luxacao",
    type: "diagnostico",
    question: "Qual a diferença entre entorse e luxação?",
    answer:
      "Entorse é lesão ligamentar por alongamento ou ruptura. Luxação é deslocamento completo da articulação. Entorse costuma ser mais comum e muitas vezes conservadora.",
    theme: "Diferenças conceituais",
    area: "Ortopedia",
  },
  {
    id: "dif-contusao-hematoma",
    type: "diagnostico",
    question: "Qual a diferença entre contusão e hematoma?",
    answer:
      "Contusão é lesão tecidual por trauma sem corte na pele. Hematoma é uma coleção localizada de sangue extravasado.",
    theme: "Diferenças conceituais",
    area: "Clínica medica",
  },
  {
    id: "dif-urticaria-angioedema",
    type: "diagnostico",
    question: "Qual a diferença entre urticária e angioedema?",
    answer:
      "Urticária são placas eritematosas superficiais e pruriginosas. Angioedema é edema profundo na derme ou subcutâneo, podendo afetar labios, pálpebras e vias aéreas.",
    theme: "Diferenças conceituais",
    area: "Dermatologia",
  },
  {
    id: "dif-eczema-dermatite-contato",
    type: "diagnostico",
    question: "Qual a diferença entre eczema e dermatite de contato?",
    answer:
      "Eczema é termo genérico para inflamação cutânea pruriginosa e descamativa. Dermatite de contato é reação específica a irritante ou alérgeno.",
    theme: "Diferenças conceituais",
    area: "Dermatologia",
  },
  {
    id: "dif-dispneia-taquipneia",
    type: "diagnostico",
    question: "Qual a diferença entre dispneia e taquipneia?",
    answer:
      "Dispneia é sensação subjetiva de falta de ar. Taquipneia é aumento objetivo da frequência respiratória, geralmente acima de 20 irpm no adulto.",
    theme: "Diferenças conceituais",
    area: "Semiologia",
  },
  {
    id: "dif-choque-hipotensao",
    type: "diagnostico",
    question: "Qual a diferença entre choque e hipotensão?",
    answer:
      "Hipotensão é pressão arterial baixa. Choque é hipoperfusão tecidual, com sinais como confusão, oligúria e pele fria, podendo ou não cursar com hipotensão inicial.",
    theme: "Diferenças conceituais",
    area: "Emergência",
  },
  {
    id: "dif-edema-linfedema",
    type: "diagnostico",
    question: "Qual a diferença entre edema e linfedema?",
    answer:
      "Edema é acúmulo de líquido intersticial por várias causas. Linfedema ocorre por falha ou obstrução linfática, tende a ser crônico e pode formar menos cacifo.",
    theme: "Diferenças conceituais",
    area: "Clínica medica",
  },
  {
    id: "dif-ulcera-erosao",
    type: "diagnostico",
    question: "Qual a diferença entre úlcera e erosão cutânea?",
    answer:
      "Erosão é perda superficial da epiderme e costuma cicatrizar sem cicatriz. Úlcera atinge derme ou subcutâneo e tende a cicatrizar com cicatriz.",
    theme: "Diferenças conceituais",
    area: "Dermatologia",
  },
  {
    id: "dif-sincope-pre-sincope",
    type: "diagnostico",
    question: "Qual a diferença entre sincope e pré-sincope?",
    answer:
      "Síncope é perda transitória da consciencia por hipoperfusão cerebral. Pré-síncope é sensação de desmaio iminente sem perda completa da consciencia.",
    theme: "Diferenças conceituais",
    area: "Semiologia",
  },
  {
    id: "dif-gastrite-ulcera",
    type: "diagnostico",
    question: "Qual a diferença entre gastrite e úlcera péptica?",
    answer:
      "Gastrite é inflamação da mucosa gástrica. Úlcera é lesão que ultrapassa a muscular da mucosa, com maior risco de sangramento e perfuração.",
    theme: "Diferenças conceituais",
    area: "Gastroenterologia",
  },
  {
    id: "dif-asma-dpoc-exacerbada",
    type: "diagnostico",
    question: "Qual a diferença entre crise asmática e DPOC exacerbada?",
    answer:
      "Asma costuma ter obstrução reversível, muitas vezes em jovens e atópicos. DPOC costuma ter obstrução pouco reversível, associada a tabagismo e idade acima de 40 anos.",
    theme: "Diferenças conceituais",
    area: "Pneumologia",
  },
  {
    id: "dif-hipertensao-crise-hipertensiva",
    type: "diagnostico",
    question: "Qual a diferença entre hipertensão arterial e crise hipertensiva?",
    answer:
      "Hipertensão é elevacao crônica da PA. Crise hipertensiva envolve PA muito elevada, geralmente >180/120, com ou sem lesão aguda de órgão-alvo; emergência ocorre quando há lesão aguda.",
    theme: "Diferenças conceituais",
    area: "Cardiologia",
  },
  {
    id: "dif-artrite-artrose",
    type: "diagnostico",
    question: "Qual a diferença entre artrite e artrose?",
    answer:
      "Artrite é inflamação articular. Artrose é desgaste degenerativo da cartilagem. Artrite costuma ter sinais inflamatórios; artrose piora com uso.",
    theme: "Diferenças conceituais",
    area: "Reumatologia",
  },
  {
    id: "dif-convulsao-epilepsia",
    type: "diagnostico",
    question: "Qual a diferença entre convulsao e epilepsia?",
    answer:
      "Convulsão é um evento por descarga elétrica anormal. Epilepsia é tendencia a crises recorrentes, geralmente definida por duas ou mais crises não provocadas.",
    theme: "Diferenças conceituais",
    area: "Neurologia",
  },
  {
    id: "dif-celulite-erisipela",
    type: "diagnostico",
    question: "Qual a diferença entre celulite e erisipela?",
    answer:
      "Celulite acomete derme profunda e subcutâneo, com bordas mal definidas. Erisipela é mais superficial, com bordas elevadas e bem definidas.",
    theme: "Diferenças conceituais",
    area: "Dermatologia",
  },
  {
    id: "dif-diarreia-disenteria",
    type: "diagnostico",
    question: "Qual a diferença entre diarreia aguda e disenteria?",
    answer:
      "Diarreia é aumento do número de evacuações com fezes amolecidas. Disenteria é diarreia com sangue e muco, sugerindo processo invasivo.",
    theme: "Diferenças conceituais",
    area: "Gastroenterologia",
  },
  {
    id: "dif-ictericia-colestase",
    type: "diagnostico",
    question: "Qual a diferença entre icterícia e colestase?",
    answer:
      "Icterícia é coloração amarelada por bilirrubina elevada. Colestase é redução do fluxo biliar, geralmente com bilirrubina direta alta, prurido, colúria e fezes claras.",
    theme: "Diferenças conceituais",
    area: "Gastroenterologia",
  },
  {
    id: "dif-icc-edema-agudo-pulmao",
    type: "diagnostico",
    question: "Qual a diferença entre insuficiência cardíaca e edema agudo de pulmão?",
    answer:
      "Insuficiência cardíaca é síndrome de baixa saída ou congestão, muitas vezes crônica. Edema agudo de pulmão é descompensação aguda com líquido nos alvéolos.",
    theme: "Diferenças conceituais",
    area: "Cardiologia",
  },
  {
    id: "dif-hipoglicemia-choque-hipoglicemico",
    type: "diagnostico",
    question: "Qual a diferença entre hipoglicemia e choque hipoglicêmico?",
    answer:
      "Hipoglicemia é glicemia baixa, geralmente <70 mg/dL. Choque hipoglicêmico é hipoglicemia grave com alteracao de consciencia, convulsao ou incapacidade de ingerir carboidrato.",
    theme: "Diferenças conceituais",
    area: "Endocrinologia",
  },

  // Contraindicacoes e razoes praticas
  {
    id: "contra-aines-ulcera-sangramento",
    type: "medicamento",
    question: "Por que AINEs devem ser evitados em pacientes com úlcera péptica ou sangramento digestivo?",
    answer:
      "Inibem COX-1, reduzem prostaglandinas protetoras da mucosa gástrica e prejudicam agregação plaquetária, aumentando risco de úlcera e hemorragia.",
    theme: "Contraindicações",
    area: "Farmacologia",
  },
  {
    id: "contra-betabloqueador-asma",
    type: "medicamento",
    question: "Por que betabloqueadores são contraindicados ou usados com muita cautela em asma bronquica grave?",
    answer:
      "Podem bloquear receptores beta-2 bronquiais e causar broncoconstrição. Cardiosseletivos podem ser considerados apenas em casos selecionados e com cautela.",
    theme: "Contraindicações",
    area: "Farmacologia",
  },
  {
    id: "contra-aines-insuficiencia-renal",
    type: "medicamento",
    question: "Por que AINEs devem ser evitados em insuficiência renal aguda ou crônica?",
    answer:
      "Inibem prostaglandinas renais que mantêm a dilatação da arteríola aferente, reduzindo filtração glomerular e podendo piorar rapidamente a função renal.",
    theme: "Contraindicações",
    area: "Nefrologia",
  },
  {
    id: "contra-anticoncepcional-fumante-35",
    type: "medicamento",
    question: "Por que anticoncepcionais orais combinados são contraindicados em fumantes acima de 35 anos?",
    answer:
      "O estrogênio aumenta risco trombótico, e o tabagismo soma risco arterial e venoso, elevando chance de trombose, infarto e AVC.",
    theme: "Contraindicações",
    area: "Ginecologia",
  },
  {
    id: "contra-tetraciclina-crianca-gestante",
    type: "medicamento",
    question: "Por que tetraciclinas, como doxiciclina, são evitadas em crianças menores de 8 anos e gestantes?",
    answer:
      "Podem se depositar em dentes e ossos em formação, causando coloração dentária permanente e efeitos no desenvolvimento ósseo.",
    theme: "Contraindicações",
    area: "Farmacologia",
  },
  {
    id: "contra-ibp-uso-prolongado",
    type: "medicamento",
    question: "Por que o uso prolongado de IBP, como omeprazol e pantoprazol, deve ser reavaliado?",
    answer:
      "Uso prolongado pode aumentar risco de infecção por C. difficile, fraturas, hipomagnesemia e pneumonia. A ideia é usar menor dose pelo menor tempo necessário.",
    theme: "Contraindicações",
    area: "Gastroenterologia",
  },
  {
    id: "contra-anti-histaminico-primeira-idoso",
    type: "medicamento",
    question: "Por que anti-histaminicos de 1ª geração são evitados em idosos?",
    answer:
      "Têm efeito anticolinérgico importante, podendo causar confusão, delirium, retenção urinária, boca seca e quedas. Preferir opções de 2ª geração quando possível.",
    theme: "Contraindicações",
    area: "Geriatria",
  },
  {
    id: "contra-varfarina-inr",
    type: "medicamento",
    question: "Por que a varfarina precisa de monitoramento rigoroso do INR?",
    answer:
      "Tem janela terapêutica estreita e muitas interações medicamentosas e alimentares, especialmente com vitamina K. Sem controle, aumenta risco de sangramento ou trombose.",
    theme: "Contraindicações",
    area: "Cardiologia",
  },
  {
    id: "contra-fluoroquinolonas-gestantes-criancas",
    type: "medicamento",
    question: "Por que fluoroquinolonas são evitadas em gestantes e crianças?",
    answer:
      "Há preocupação com efeitos em cartilagens de crescimento, artralgias e tendinopatias. Reservar para situações em que não há alternativa adequada.",
    theme: "Contraindicações",
    area: "Farmacologia",
  },
  {
    id: "contra-metformina-tfg-baixa",
    type: "medicamento",
    question: "Por que metformina é contraindicada em insuficiência renal grave, como TFG <30 mL/min?",
    answer:
      "Pode acumular e aumentar risco de acidose láctica. Também deve ser pausada temporariamente em desidratação grave ou alguns contextos de contraste iodado.",
    theme: "Contraindicações",
    area: "Endocrinologia",
  },
  {
    id: "contra-codeina-tramadol-crianca",
    type: "medicamento",
    question: "Por que codeína e tramadol devem ser evitados em crianças menores de 12 anos?",
    answer:
      "O metabolismo via CYP2D6 é variável, podendo gerar níveis imprevisíveis e risco de depressão respiratória grave.",
    theme: "Contraindicações",
    area: "Pediatria",
  },
  {
    id: "contra-ieca-bra-gravidez",
    type: "medicamento",
    question: "Por que IECA e BRA são contraindicados na gravidez?",
    answer:
      "Podem causar toxicidade fetal, alterações renais fetais, oligoidrâmnio e outros danos. Devem ser trocados por anti-hipertensivos seguros na gestação.",
    theme: "Contraindicações",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "contra-estatina-gravidez",
    type: "medicamento",
    question: "Por que estatinas são evitadas na gravidez?",
    answer:
      "Não são usadas de rotina na gestação por preocupação com toxicidade fetal e por não serem essenciais durante esse período na maioria dos casos.",
    theme: "Contraindicações",
    area: "Cardiologia",
  },
  {
    id: "contra-clindamicina-cdiff",
    type: "medicamento",
    question: "Por que clindamicina e antibióticos de amplo espectro aumentam risco de diarreia por C. difficile?",
    answer:
      "Alteram a microbiota intestinal e permitem proliferação de C. difficile. O risco é clássico com clindamicina, fluoroquinolonas e cefalosporinas.",
    theme: "Contraindicações",
    area: "Infectologia",
  },
  {
    id: "contra-digoxina-idoso-renal",
    type: "medicamento",
    question: "Por que digoxina deve ser usada com cautela em idosos e pacientes com insuficiência renal?",
    answer:
      "Eliminação renal reduzida aumenta risco de acúmulo e intoxicação, com arritmias, náuseas, confusão e alterações visuais.",
    theme: "Contraindicações",
    area: "Cardiologia",
  },
  {
    id: "contra-aines-insuficiencia-cardiaca",
    type: "medicamento",
    question: "Por que AINEs são contraindicados na insuficiência cardíaca descompensada?",
    answer:
      "Podem causar retenção de sódio e água e elevar a pressão arterial, piorando congestão e descompensação.",
    theme: "Contraindicações",
    area: "Cardiologia",
  },
  {
    id: "contra-sulfonilureia-idoso-fragil",
    type: "medicamento",
    question: "Por que sulfonilureias, como glibenclamida, são evitadas em idosos frageis?",
    answer:
      "Aumentam risco de hipoglicemia prolongada e grave, especialmente com baixa ingesta, insuficiência renal ou polifarmácia.",
    theme: "Contraindicações",
    area: "Endocrinologia",
  },
  {
    id: "contra-aspirina-crianca-virose",
    type: "medicamento",
    question: "Por que aspirina em baixas doses é evitada em crianças com virose?",
    answer:
      "Está associada a Síndrome de Reye, com encefalopatia e insuficiência hepática. Para febre, usar alternativas pediátrica apropriadas.",
    theme: "Contraindicações",
    area: "Pediatria",
  },
  {
    id: "contra-isrs-serotoninergicos",
    type: "medicamento",
    question: "Por que ISRS devem ser usados com cautela junto com outros medicamentos serotoninergicos?",
    answer:
      "A combinação pode causar síndrome serotoninérgica, com agitação, hipertermia, rigidez, taquicardia e instabilidade autonômica.",
    theme: "Contraindicações",
    area: "Psiquiatria",
  },

  // Anatomia basica
  {
    id: "anat-ponto-ausculta-mitral",
    type: "clinico",
    question: "Onde se localiza o ponto de ausculta da valva mitral?",
    answer:
      "No 5o espaco intercostal esquerdo, na linha hemiclavicular, próximo ao apice cardíaco. E o melhor ponto para sopros mitrais.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-apendice",
    type: "clinico",
    question: "Qual a localizacao anatômica classica do apendice vermiforme?",
    answer:
      "Quadrante inferior direito, próximo ao ponto de McBurney, entre a espinha ilíaca antero-superior direita e o umbigo. Dor nesse ponto sugere apendicite.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-manguito-rotador",
    type: "clinico",
    question: "Quais são os principais músculos do manguito rotador?",
    answer:
      "Supraespinal, infraespinal, redondo menor e subescapular. Mnemônico: SITS. Estabilizam o ombro e são frequentes em tendinopatias.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-traqueia-esofago",
    type: "clinico",
    question: "Qual a diferença anatômica entre traqueia e esôfago?",
    answer:
      "Traqueia é anterior, cartilaginosa e tem anéis em C. Esôfago é posterior, muscular e sem cartilagem. Importante para intubação e endoscopia.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-trigemeo-sensibilidade-face",
    type: "clinico",
    question: "Qual nervo é responsável pela sensibilidade da face?",
    answer:
      "Nervo trigêmeo, V par craniano, com ramos oftálmico, maxilar e mandibular. É importante na neuralgia do trigêmeo.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-flexor-quadril",
    type: "clinico",
    question: "Qual músculo é o principal flexor do quadril?",
    answer:
      "Iliopsoas, formado pelo psoas maior e ilíaco. É testado indiretamente no sinal do psoas em apendicite retrocecal.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-hernias-inguinais",
    type: "clinico",
    question: "Onde se localiza a região inguinal relacionada a hernias?",
    answer:
      "Acima do ligamento inguinal. A hernia direta ocorre no triangulo de Hesselbach; a indireta passa pelo canal inguinal.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-cerebral-anterior",
    type: "clinico",
    question: "Qual arteria irriga principalmente a face medial do cerebro anterior?",
    answer:
      "Arteria cerebral anterior, ramo da carotida interna. Lesão pode causar paresia predominante de membro inferior contralateral.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-tireoide",
    type: "clinico",
    question: "Onde se encontra a glandula tireoide?",
    answer:
      "Na região cervical anterior, envolvendo a traqueia, geralmente ao nível dos primeiros anéis traqueais. Nódulos e bócio são achados comuns.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-veia-cava-inferior",
    type: "clinico",
    question: "Qual é a veia mais calibrosa do organismo?",
    answer:
      "Veia cava inferior. Drena sangue da maior parte do corpo abaixo do diafragma para o atrio direito.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-dorsiflexao-pe",
    type: "clinico",
    question: "Qual nervo é responsável principalmente pela dorsiflexão do pé?",
    answer:
      "Nervo fibular profundo. Lesão pode causar pé caído e marcha escarvante.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-forame-magno",
    type: "clinico",
    question: "Onde se localiza o forame magno?",
    answer:
      "Na base do crânio, no osso occipital. Permite a passagem da medula espinhal e estruturas neurovasculares.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-pele-epiderme",
    type: "clinico",
    question: "Qual é a camada mais superficial da pele?",
    answer:
      "Epiderme. A derme fica abaixo e contém colágeno, vasos, nervos, folículos e glândulas.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-ligamento-valgo-joelho",
    type: "clinico",
    question: "Qual ligamento estabiliza o joelho contra estresse em valgo?",
    answer:
      "Ligamento colateral medial. E lesionado em traumas com valgo forcado.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },
  {
    id: "anat-baco-costelas",
    type: "clinico",
    question: "Onde se encontra o baco em relacao as costelas?",
    answer:
      "No hipocôndrio esquerdo, protegido principalmente pelas costelas 9, 10 e 11. É vulnerável em trauma de flanco esquerdo.",
    theme: "Anatomia básica",
    area: "Anatomia",
  },

  // Pre-natal
  {
    id: "prenatal-frequencia-consultas",
    type: "prevencao",
    question: "Com que frequência devem ser realizadas consultas de pré-natal em gestante de baixo risco?",
    answer:
      "Mensal até 28 semanas, quinzenal de 28 a 36 semanas e semanal após 36 semanas. O mínimo é 6 consultas, mas o ideal é mais acompanhamento.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-acido-folico",
    type: "prevencao",
    question: "Qual suplemento é mais importante no início da gestação e por que?",
    answer:
      "Ácido fólico 400 mcg/dia, ou dose maior em alto risco. Previne defeitos do tubo neural, idealmente iniciado antes da concepcao.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-ferro",
    type: "prevencao",
    question: "Quando deve ser iniciado o sulfato ferroso na gestação?",
    answer:
      "Geralmente a partir da 14a-20a semana, com 40-60 mg/dia de ferro elementar conforme protocolo. Ajuda a prevenir anemia.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-dtpa",
    type: "prevencao",
    question: "Qual vacina é obrigatória no pré-natal para proteger contra coqueluche neonatal?",
    answer:
      "dTpa, preferencialmente entre 27 e 36 semanas. Protege o recém-nascido contra coqueluche.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-vdrl",
    type: "rastreamento",
    question: "Qual exame deve ser feito no pré-natal para rastrear sifilis?",
    answer:
      "VDRL ou RPR, com confirmatório conforme protocolo. Fazer no início, repetir no terceiro trimestre e no parto quando indicado.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-hiv",
    type: "rastreamento",
    question: "Quando deve ser realizado o teste de HIV na gestante?",
    answer:
      "No primeiro trimestre é repetido no terceiro trimestre. Teste rápido também pode ser feito no momento do parto se necessário.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-usg-primeiro-trimestre",
    type: "rastreamento",
    question: "Qual a idade gestacional ideal para a primeira ultrassonografia com translucencia nucal?",
    answer:
      "Entre 11 e 14 semanas. Ajuda a confirmar idade gestacional e rastrear anomalias.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-diabetes-gestacional",
    type: "rastreamento",
    question: "Quando é feito o rastreamento de diabetes gestacional com teste oral de tolerância a glicose?",
    answer:
      "Em geral entre 24 e 28 semanas com 75 g de glicose. Em gestantes de alto risco, avaliar rastreio mais precoce.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-sinais-alerta",
    type: "conduta",
    question: "Quais sinais de alerta no pré-natal indicam procurar emergência?",
    answer:
      "Sangramento vaginal, dor abdominal intensa, diminuicao de movimentos fetais, cefaleia forte, visao turva, dispneia, febre ou inchaco subito.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-aas-preeclampsia",
    type: "prevencao",
    question: "Quando é indicada profilaxia de pré-eclampsia com AAS?",
    answer:
      "Em gestantes de alto risco, geralmente AAS em baixa dose a partir de 12 semanas até próximo de 36 semanas, conforme protocolo local.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },
  {
    id: "prenatal-conduta-consulta",
    type: "conduta",
    question: "Qual a conduta básica em uma consulta de pré-natal?",
    answer:
      "Aferir PA, peso, revisar queixas, avaliar edema, medir altura uterina quando indicado, auscultar BCF conforme idade gestacional, checar exames e orientar sinais de alerta.",
    theme: "Pré-natal",
    area: "Ginecologia e obstetrícia",
  },

  // Pediatria basica
  {
    id: "ped-paracetamol-dose",
    type: "medicamento",
    question: "Qual a posologia de paracetamol para criança com febre ou dor?",
    answer:
      "10-15 mg/kg/dose a cada 6 horas, respeitando dose máxima diária. Ajustar por idade, peso, hepatopatia e apresentação disponível.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-dipirona-dose",
    type: "medicamento",
    question: "Qual a posologia de dipirona em pediatria?",
    answer:
      "10-15 mg/kg/dose a cada 6 horas, respeitando dose máxima diária. Usar com cautela em lactentes pequenos conforme protocolo local.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-ferro-profilatico",
    type: "prevencao",
    question: "Quando deve ser iniciada a suplementação de ferro em lactentes?",
    answer:
      "Geralmente a partir de 4-6 meses, com dose profilática conforme risco e protocolo. E especialmente importante em aleitamento materno exclusivo.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-pentavalente",
    type: "prevencao",
    question: "Quais doenças a vacina pentavalente cobre e quando é aplicada?",
    answer:
      "Difteria, tétano, coqueluche, Haemophilus influenzae B e hepatite B. No PNI, é aplicada aos 2, 4 e 6 meses.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-bronquiolite-internacao",
    type: "conduta",
    question: "Qual criterio sugere internacao em criança com bronquiolite?",
    answer:
      "Saturação baixa, desconforto respiratório importante, apneia, dificuldade de alimentar, desidratação ou alto risco clínico. O tratamento principal é suporte.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-introducao-alimentar",
    type: "prevencao",
    question: "Quando iniciar alimentação complementar no lactente?",
    answer:
      "A partir dos 6 meses completos, mantendo aleitamento materno até 2 anos ou mais quando possível.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-peso-estimado",
    type: "clinico",
    question: "Como estimar o peso de crianças de 1 a 10 anos em situações práticas?",
    answer:
      "Uma fórmula aproximada é peso em kg = 2 x idade em anos + 8. Serve para estimativa rapida, mas não substitui pesagem real.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-diarreia-aguda",
    type: "conduta",
    question: "Qual a principal orientação na diarreia aguda em criança?",
    answer:
      "Hidratação oral com soro de reidratação oral e manutenção da alimentação. Não suspender aleitamento materno.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-desidratacao-grave",
    type: "diagnostico",
    question: "Quando suspeitar de desidratação grave em criança?",
    answer:
      "Letargia, olhos encovados, mucosas muito secas, choro sem lágrimas, ma perfusão, incapacidade de beber ou sinais de choque. Requer reidratação venosa.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-meningite-lactente",
    type: "diagnostico",
    question: "Qual sinal pode sugerir meningite em lactente?",
    answer:
      "Febre com irritabilidade, vômitos, letargia ou fontanela abaulada. Rigidez de nuca pode estar ausente em lactentes.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-asma-crise-leve-moderada",
    type: "conduta",
    question: "Qual a conduta inicial na crise de asma infantil leve a moderada?",
    answer:
      "Salbutamol inalatório com espaçador em doses repetidas, reavaliando resposta. Considerar corticoide sistêmico conforme gravidade e resposta.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-marco-2-meses",
    type: "rastreamento",
    question: "Qual marco de desenvolvimento é esperado aos 2 meses?",
    answer:
      "Sorriso social e sustentação breve da cabeça. Acompanhar marcos ajuda a rastrear atrasos no desenvolvimento.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-ferro-terapeutico",
    type: "medicamento",
    question: "Quando indicar sulfato ferroso em dose terapêutica em criança?",
    answer:
      "Quando há anemia ferropriva ou hemoglobina baixa conforme faixa etária. Dose terapêutica comum: 3-6 mg/kg/dia de ferro elementar.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-obstrucao-nasal-cronica",
    type: "diagnostico",
    question: "Qual causa comum de obstrução nasal crônica em criança pré-escolar?",
    answer:
      "Hipertrofia de adenoides. Pode causar ronco, respiração oral, sono ruim e otites de repetição.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
  {
    id: "ped-febre-menor-3-meses",
    type: "conduta",
    question: "Qual a orientação para febre em criança menor de 3 meses?",
    answer:
      "Febre igual ou maior que 38 graus Celsius deve ser avaliada em serviço de emergência, pelo maior risco de infecção bacteriana grave.",
    theme: "Pediatria básica",
    area: "Pediatria",
  },
];

export const seedFlashcards: Flashcard[] = cards.map(makeCard);
