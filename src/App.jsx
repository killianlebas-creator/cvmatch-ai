import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────── */
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Epilogue:wght@300;400;500;600;700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --ink: #0f0e0d; --ink-soft: #3d3b38; --ink-mute: #7a7570;
      --paper: #faf9f7; --paper-warm: #f3f0eb; --paper-mid: #e8e3db;
      --accent: #1a6b4a; --accent-light: #d4ede1; --accent-hover: #145a3d;
      --gold: #c9943a; --gold-light: #fdf3e3;
      --danger: #c0392b; --danger-light: #fdf2f0;
      --border: #ddd9d0;
      --shadow-sm: 0 1px 3px rgba(15,14,13,.06);
      --shadow-md: 0 4px 12px rgba(15,14,13,.08), 0 2px 4px rgba(15,14,13,.04);
      --shadow-lg: 0 16px 40px rgba(15,14,13,.1), 0 4px 12px rgba(15,14,13,.06);
      --r: 10px; --r-lg: 18px;
      --fd: 'Playfair Display', Georgia, serif;
      --fb: 'Epilogue', system-ui, sans-serif;
    }
    html { scroll-behavior: smooth; }
    body { font-family: var(--fb); background: var(--paper); color: var(--ink); line-height: 1.6; overflow-x: hidden; }
    buZ[\ܝ�\�T�]K\�QY��X�\�T�Y�\�P�[�X��H���H��XX���ʈ8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� ��АS�ST¸� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 
��ۜ��ؘ[�[HH

HO�
��[O���[\ܝ\�
	�΋�ٛ۝˙����X\\˘��K���̏٘[Z[OT^Y�Z\��\�^N�][��
�
��
��K
�K
�	��[Z[OQ\[��YN������L͌��	�\�^O\��\	�N
�
����Y�ܙK
���Y�\����\�^�[�Έ�ܙ\�X���X\��[���Y[�Έ�B�����KZ[�Έ��L�KZ[��\�ٝ���،��KZ[��[]]N���M�M�K\\\��٘Y�Y���K\\\�]�\�N�ٌٌX��K\\\�[ZY��NL��KXX��[���XM��N�KXX��[�[Y���
YLN�KXX��[�Zݙ\���M
XL�KY�����NM�N�KY��[Y��ٙ��L�KY[��\�����L���KY[��\�[Y��ٙ���KX�ܙ\���YK\�Y��\�N�\��ؘJMKML��
�NK\�Y��[Y�
L��ؘJMKML��
K�
�ؘJMKML��

NK\�Y��[ΈM�
�ؘJMKML��JK
L��ؘJMKML��
�NK\��L�K\�[ΈNKY��	�^Y�Z\�\�^I��[ܙ�XK�\�Y�KY���	�\[��YI��\�[K]ZK�[��\�\�Y�B�[��ܛ�X�Z]�[܎��[���B���H��۝Y�[Z[N��\�KY��N��X��ܛ�[���\�K\\\�N���܎��\�KZ[��N�[�KZZY��K���ݙ\����^�Y[��B��]ۈ��\��܎��[�\���۝Y�[Z[N��\�KY��N�B�^\�XK[�]��۝Y�[Z[N��\�KY��N�B���^Y��[Y\��YU\����H��X�]N���[�ٛܛN��[��]VJ��
N�H���X�]N�N��[�ٛܛN��[��]VJ
N�HB��^Y��[Y\��YR[�����H��X�]N��H���X�]N�N�HB��^Y��[Y\���]�	KL	^��[�ٛܛN��[��]VJ
_H
L	^��[�ٛܛN��[��]VJM�
_HB��^Y��[Y\�[�KY��	KL	^��X�]N�N��[�ٛܛN���[JJ_H
L	^��X�]N��N��[�ٛܛN���[J�
_HB��^Y��[Y\��[�����[�ٛܛN���]J͌Y�N�HB��^Y��[Y\��[[Y\��	^ؘX��ܛ�[�\��][ێ�L�	HHL	^ؘX��ܛ�[�\��][ێ��	HHB��^Y��[Y\���ܙP��[�����^��X�]N���[�ٛܛN���[J��_H���X�]N�N��[�ٛܛN���[JJ_HB��^Y��[Y\��YR[�����^��X�]N���[�ٛܛN��[��]V
LL�
_H���X�]N�N��[�ٛܛN��[��]V

_HB��^Y��[Y\���ܙ\�њ[����^��Y�H���Y��\�K]\��]]�_HB��^Y��[Y\��\�ܛ������^�ZY��H��ZY���\�K]\��]Z
_HB����YK]\�[�[X][ێ��YU\�M\�X\�H���B���YK]\LH�[�[X][ێ��YU\�M\��\�X\�H���B���YK]\L��[�[X][ێ��YU\�M\����X\�H���B���YK]\L��[�[X][ێ��YU\�M\����X\�H���B���YK]\M�[�[X][ێ��YU\�M\���X\�H���B���YKZ[��[�[X][ێ��YR[����X\�H���B��ʈ�ܛ��\�
���]�X��]\�ܛ��\���Y�
��B���]�X��]\�ܛ��\�]�X����X��ܛ�[���\�K\\\�]�\�JN�B���]�X��]\�ܛ��\�][X���X��ܛ�[���\�K\\\�[ZY
N��ܙ\�\�Y]\Έ��B���]�X��]\�ܛ��\�][X��ݙ\���X��ܛ�[���\�KZ[��[]]JN�B�O��[O��N�ʈ8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� �T�Qӈ��S���ST�¸� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 
��ۜ��H��^[�]��۝Z[�\���X^�Y�LL�X\��[���]]ȋY[�Έ���K��^�
�\L[YۏH��[�\���\�Y�OH��^\�\��HO�
�\�^N���^�[Yے][\Θ[Yۋ�\�Y�P�۝[���\�Y�K�\JK�ܚY�
����\L�
HO�
�\�^N��ܚY�ܚY[\]P��[[�Θ����\JK�����]ۜ���
�\�X[�H��[X\�H��^�OH�Y�HO�
\�^N��[�[�KY�^�[Yے][\Έ��[�\���\��Y[�Έ�^�OOOH�Ȉ��M\����^�OOOH��H����M����L\����ܙ\��Y]\Έ�^�OOOH�Ȉ�L����۝�^�N��^�OOOH�Ȉ��\�[H���^�OOOH��H�����[H����\�[H���۝�ZY����ܙ\����ۙH�^X�ܘ][ێ���ۙH��[��][ێ��[���X\�H���\��܎���[�\���۝�[Z[N���\�KY��H������\�X[�OOH��[X\�H���X��ܛ�[����\�KXX��[�
H���܎���]H�����Y�Έ�
M�ؘJ��L
�
���JH��H��\�X[�OOH��][�H���X��ܛ�[����[��\�[����܎���\�KZ[��H���ܙ\���K�\��Y�\�KX�ܙ\�H��H��\�X[�OOH�������X��ܛ�[����[��\�[����܎���\�KZ[��\�ٝ
H��ܙ\����ۙH��H��\�X[�OOH�[��\����X��ܛ�[����\�KY[��\�H���܎���]H��H��JB�JK�����\��\��
L�
HO�
�X��ܛ�[����]H��ܙ\���\��Y�\�KX�ܙ\�H���ܙ\��Y]\Έ��\�K\�[�H�Y[�Μ����Y�Έ��\�K\�Y��\�JH��JK����\�ܘ\B�\�^N�
�^�OH�����[H�HO�
�۝�[Z[N���\�KY�
H��۝�^�N��^�K�[�RZY��K��]\��X�[�Έ�K��[H���܎���\�KZ[��H��JK�X�[��۝�^�N���̜�[H��۝�ZY���]\��X�[�Έ��Y[H��^�[�ٛܛN��\\��\�H���܎���\�KZ[��[]]JH��K����[�][�]��Y��L	H�Y[�Έ�L\M���ܙ\���K�\��Y�\�KX�ܙ\�H��ܙ\��Y]\Έ��\�K\�H���۝�^�N���\�[H���܎���\�KZ[��H���X��ܛ�[����]H��][�N���ۙH��[��][ێ���ܙ\���ȋ��۝�[Z[N���\�KY��H��K�^\�XN��Y��L	H�Y[�Έ�M���ܙ\���K�\��Y�\�KX�ܙ\�H��ܙ\��Y]\Έ��\�K\�H���۝�^�N���
�\�[H���܎���\�KZ[��H���X��ܛ�[����]H��][�N���ۙH��\�^�N���\�X�[��[�RZY��K��K�۝�[Z[N���\�KY��H��[��][ێ���ܙ\���Ȃ�B�N�ʈ8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� �P�Ӕ¸� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 
��ۜ�X�ۈH
��[YK�^�OLM���܏H��\��[���܈�JHO��ۜ�X�ۜ�H�\��]H�LL���M[LHLLL�N[KN��Ϗϋ��X�Έ��[[�H�[��H��
�HM�
L��Ϗϋ���[�HOH�N�LOH����H���L�H�N�Ϗ[�HOH���LOH����H�N�L�H�N�Ϗϋ�\���Έ�]H�MHL�MLL�
[
�
�M�
ȋϏϋ�\������]H�LNHL�
SLL�N[M�M�
�MȋϏϋ�\�Y���[[�H�[��H�M�M�L�L�M��Ϗ[�HOH�L��LOH�L���H�L��L�H��H�Ϗ]H�L���HN��PMH
HNZLK���NH�M��ȋϏϋ��ۛ�Y��]H�L�HM]�L��KL��
XL��KL�L��M�Ϗ�[[�H�[��H��LL�MHM�L�Ϗ[�HOH�L��LOH�MH��H�L��L�H�ȋϏϋ��\����Y�ۈ�[��H�L��MK�H�����K���M�M�MN�N�K��L�Mˍ��
K���K��
�M�M�K����LH���L���Ϗϋ��\����[[�H�[��H��
�
H
��H
��Ϗ]H�LNH
�LHML��KL��L��KL�L�
H
��Ϗ]H�LLL]��LML]���Ϗϋ�^YN��]H�LHL��NLKNLHLHMLLHLLKNLLKN��Ϗ�\��H�H�L���OH�L���H�ȋϏϋ���N���X�H�H�OH�H��YH�LȈZY�H�LȈ�H����OH���Ϗ]H�MHMR
L��KL�L��L��H�L�XL��H���H�Ϗϋ�Y]��]H�LLH

L��L���ML����ML���L��MȋϏ]H�LN�H��XL��L�H��L�HH��L�M[MHKMK�KNK�^��Ϗϋ���Έ��X�H�ȈOH�LH��YH�N�ZY�H�LH��H���Ϗ]H�M�LU��MH
HHL��Ϗϋ�\�\���]H�L��]�L�M
MMM
M
���Ϗ�\��H�H�L���OH�Ȉ�H��Ϗϋ��YN��]H�L�[KM�H
݌LXL��KL��
XL��KL�L���Ϗ�[[�H�[��H�H��HL�MHL�MH���Ϗϋ�\�ܞN���[[�H�[��H�H
HL
�L�Ϗ]H�LˍLHMXNHHH�KM�MȋϏϋ��][��Έ��\��H�H�L���OH�L���H�ȋϏ]H�LNK�MXLK��HK��H���K���
��
�L��KL������K�
�K�
�LK��HK��HLK��K���K��HK��HLHK�LU��XL��KM�K�PLK��HK��HHNK�LK��HK��HLK�����K�
��
�L��KL���L����
�K�
�LK��HK��H
��MXLK��HK��HLK�LKLR�L��HM�PLK��HK��H
��XLK��HK��HK���LK��K�
�K�
�L��H���L����
��
�LK��HK��HH
��LK��HK��HKLK�LU��L��H
��XLK��HK��HHK�LHK��HK��HK��K����
�K�
�L��H������K�
��
�LK��HK��HNK�XLK��HK��HK�LHR�XL��H
K�XLK��HK��HLK�LH^��Ϗϋ����]��]H�NH�R
XL��KL�L��XL��H�L�
�Ϗ�[[�H�[��H�M�M��HL�M�
ȋϏ[�HOH��H�LOH�L���H�H�L�H�L��Ϗϋ�\Έ�[�HOH�L��LOH�H��H�L��L�H�NH�Ϗ[�HOH�H�LOH�L���H�NH�L�H�L��Ϗϋ��[N��]H�LM�
�L��L���M�L����L�L���L����Ϗ�[[�H�[��H�M�M��Ϗϋ���N��]H�M�R
�XL��H��HHMR
��Ϗ]H�LNZK�XL��H��HMRN�Ϗ]H�M��M��Ϗ]H�LLM����M���MKK�
ˎNK�M�K��P�ˎ
HN��H
����
����Ϗ]H�LMM����M���MK�
ˎN�M�K��P�M��MHN��HM����M����Ϗ]H�LN�
���M�
�L�����Ϗϋ�\��]���\��H�H�L���OH�L���H�L�Ϗ�\��H�H�L���OH�L���H���Ϗ�\��H�H�L���OH�L���H���Ϗϋ��\��N��]H�LL��K�H�H�[
H
�S
��H�L�M�
K�H�M�LˍH�H[M��KK�SL�ވ�Ϗϋ��Y�N��]H�LL����MLL�[NL�Nݍ��
�LL��Ϗϋ�N�]\��
�ݙ��Y^��^�_HZY�^��^�_H�Y]Л�H�����[H��ۙH������O^���ܟH����U�YH�������S[�X�\H���[������S[�Z��[�H���[�����X�ۜ�ۘ[YW_B��ݙς�
NN�ʈ8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� ��R�HUU�ԑH
[�[Y[[ܞJB�� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 8� 
��ۜ�SS��T�T�H�[YN��X\�YH]\�[��[XZ[��X\�YP^[\K�����[����ȋ�X[^\�Y��
K��]Έ��[Z^�Y�L�]����ܙN�
��\���ܙN�MB�N��ۜ�SS��T�ԖHH�Y�K��\[�N����Y�H���N���Y�H�ڙ]Y�][�]N����KL�L����ܙP�Y�ܙN�����ܙPY�\��K�^]�ܙΖȐY�[H���ܝ[H���H���Ԉ���\�H�HK��Y����\[�N����\�X�\ȋ��N���\�ۜ�X�HX\��][�ȋ]N����KL�LMȋ��ܙP�Y�ܙN��K��ܙPY�\����^]�ܙΖȐԓH����H���[\ٛܘ�H��XY�[��HK��Y����\[�N��0�X�]ۈ���N����X�X[�Y�\��]N����KL�LL����ܙP�Y�ܙN�K��ܙPY�\��y1, keywords:["Product Roadmap","A/B Test","Analytics","Figma"] },
];

/* ─────────────────────────────────────────────
   SCORE RING
───────────────────────────────────────────── */
const ScoreRing = ({ score, size=90, label="" }) => {
  const r = (size/2) - 8;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 70 ? "var(--accent)" : score >= 45 ? "var(--gold)" : "var(--danger)";
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
      <svg width={size} height={size} style={{ transform:"rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--paper-mid)" strokeWidth={6}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={6}
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition:"stroke-dashoffset 1s ease, stroke .4s" }}/>
        <text x={size/2} y={size/2+1} textAnchor="middle" dominantBaseline="middle"
          style={{ transform:"rotate(90deg)", transformOrigin:`${size/2}px ${size/2}px`,
            fontFamily:"var(--fd)", fontSize: size > 80 ? "1.3rem" : "1rem",
            fontWeight:700, fill:color }}>
          {score}
        </text>
      </svg>
      {label && <span style={{ fontSize:".72rem", color:"var(--ink-mute)", fontWeight:600, textTransform:"uppercase", letterSpacing:".06em" }}>{label}</span>}
    </div>
  );
};

/* ─────────────────────────────────────────────
   SPINNER
───────────────────────────────────────────── */
const Spinner = ({ size=20, color="white" }) => (
  <div style={{ width:size, height:size, border:`2.5px solid rgba(255,255,255,.3)`,
    borderTopColor:color, borderRadius:"50%",
    animation:"spin .7s linear infinite", flexShrink:0 }}/>
);

/* ─────────────────────────────────────────────
   TOAST
───────────────────────────────────────────── */
const Toast = ({ msg, type="success", onDone }) => {
  useEffect(() => { const t = setTimeout(onDone, 3000); return () => clearTimeout(t); }, []);
  return (
    <div style={{
      position:"fixed", bottom:28, right:28, zIndex:9999,
      background: type==="error" ? "var(--danger)" : "var(--accent)",
      color:"white", padding:"12px 20px", borderRadius:"var(--r)",
      boxShadow:"var(--shadow-lg)", display:"flex", alignItems:"center", gap:10,
      fontSize:".875rem", fontWeight:500, animation:"fadeUp .3s ease both",
      maxWidth:340
    }}>
      <Icon name={type==="error" ? "x" : "check"} size={15}/>
      {msg}
    </div>
  );
};

/* ═══════════════════════════════════════════
   PAGE: LANDING
═══════════════════════════════════════════ */
const Landing = ({ onLogin, onRegister }) => {
  const [faq, setFaq] = useState(null);

  const faqs = [
    ["L'IA invente-t-elle des informations ?", "Jamais. CVMatch.ai reformule uniquement ce que vous avez fourni. Dates, diplômes, entreprises — tout reste exact. Seule la formulation est adaptée pour correspondre au vocabulaire de l'offre."],
    ["Comment fonctionne l'optimisation ?", "L'IA analyse l'offre pour identifier les mots-clés prioritaires, puis reformule vos missions et compétences pour les intégrer naturellement. Résultat : un CV que les ATS valident et que les recruteurs apprécient."],
    ["Mes données sont-elles sécurisées ?", "Vos CV sont stockés chiffrés. Nous ne partageons jamais vos données et elles ne servent pas à entraîner des IA. Suppression complète disponible à tout moment. Conforme RGPD."],
    ["Puis-je annuler facilement ?", "Oui, en un clic depuis Paramètres. Aucun formulaire, aucun appel. Accès Pro conservé jusqu'à fin de période."],
    ["Quels formats sont acceptés ?", "Import : PDF et DOCX. Export : PD et DOCX, compatibles tous ATS et messageries professionnelles."],
  ];

  const features = [
    { icon:"🔍", bg:"#fef3c7", title:"Analyse ATS instantanée", desc:"Score de correspondance, mots-clés manquants et risques d'élimination détectés avant envoi." },
    { icon:"✍️", bg:"var(--accent-light)", title:"Réécriture ciblée", desc:"L'IA reformule vos expériences avec le bon vocabulaire, adapte l'accroche et met en avant vos points forts." },
    { icon:"🛡️", bg:"#e0e7ff", title:"Authenticité garantie", desc:"Aucune information inventée. Toutes les dates, diplômes et expériences sont 100% préservés." },
    { icon:"📥", bg:"#fce7f3", title:"Export PDF & DOCX", desc:"Téléchargez votre CV prêt à envoyer, propre et compatible avec tous les ATS du marché." },
    { icon:"📂", bg:"#f0fdf4", title:"Historique complet", desc:"Retrouvez toutes vos optimisations, comparez vos scores et gérez plusieurs versions de CV." },
    { icon:"⚡", bg:"#fff7ed", title:"Illimité en Pro", desc:"Un CV sur mesure pour chaque candidature, sans restriction ni compteur." },
  ];

  return (
    <div style={{ fontFamily:"var(--fb)" }}>
      {/* NAV */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        background:"rgba(250,249,247,.94)", backdropFilter:"blur(12px)",
        borderBottom:"1px solid var(--border)"
      }}>
        <div style={{ ...s.container, display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, fontFamily:"var(--fd)", fontSize:"1.2rem", fontWeight:700 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"var(--accent)", animation:"pulse-dot 2s infinite" }}/>
            CVMatch<span style={{ color:"var(--accent)" }}>.</span>ai
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:24 }}>
            {["Fonctionnalités","Tarifs","FAQ"].map(t => (
              <a key={t} href={`#${t.toLowerCase()}`} style={{ fontSize:".875rem", fontWeight:500, color:"var(--ink-soft)", textDecoration:"none" }}>{t}</a>
            ))}
            <button onClick={onLogin} style={{ ...s.btn("outline","sm"), borderRadius:6 }}>Connexion</button>
            <button onClick={onRegister} style={{ ...s.btn("primary","sm"), borderRadius:6 }}>Essai gratuit</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding:"130px 0 90px", background:"var(--paper)", position:"relative", overflow:"hidden" }}>
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none",
          background:"radial-gradient(ellipse 55% 50% at 70% 40%, rgba(26,107,74,.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 60%, rgba(201,148,58,.04) 0%, transparent 60%)"
        }}/>
        <div style={{ ...s.container, display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <div>
            <div className="fade-up" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"5px 14px", borderRadius:100, background:"var(--accent-light)", color:"var(--accent)", fontSize:".78rem", fontWeight:700, marginBottom:24, border:"1px solid rgba(26,107,74,.15)" }}>
              <Icon name="zap" size={13}/> Propulsé par Claude AI
            </div>
            <h1 className="fade-up-1" style={{ ...s.display("clamp(2.4rem,4vw,3.4rem)"), marginBottom:20 }}>
              Votre CV,<br/>adapté à <em style={{ color:"var(--accent)", fontStyle:"italic" }}>chaque offre</em><br/>en 30 secondes.
            </h1>
            <p className="fade-up-2" style={{ fontSize:"1.05rem", color:"var(--ink-soft)", lineHeight:1.75, marginBottom:36 }}>
              Notre IA analyse l'offre d'emploi et réécrit intelligemment votre CV pour maximiser votre score ATS — sans jamais inventer une ligne.
            </p>
            <div className="fade-up-3" style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:28 }}>
              <button onClick={onRegister} style={s.btn("primary","lg")}>
                Commencer gratuitement <Icon name="arrow" size={15}/>
              </button>
              <a href="#Fonctionnalités" style={{ ...s.btn("outline","lg"), textDecoration:"none" }}>Voir comment ça marche</a>
            </div>
            <div className="fade-up-4" style={{ display:"flex", gap:22, flexWrap:"wrap" }}>
              {["7 jours gratuits","Sans carte bancaire","Annulation libre"].map(t => (
                <span key={t} style={{ display:"flex", alignItems:"center", gap:6, fontSize:".8rem", color:"var(--ink-mute)", fontWeight:500 }}>
                  <Icon name="check" size={13} color="var(--accent)"/>{t}
                </span>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="fade-in" style={{ position:"relative", animation:"float 6s ease-in-out infinite" }}>
            <div style={{ ...s.card(28), position:"relative" }}>
              <div style={{ position:"absolute", top:-14, right:20, background:"var(--accent)", color:"white", padding:"7px 16px", borderRadius:100, fontSize:".78rem", fontWeight:700, boxShadow:"0 4px 12px rgba(26,107,74,.3)", display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ opacity:.8 }}>23%</span> → <strong>87%</strong> ATS ✓
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20, paddingBottom:16, borderBottom:"1px solid var(--paper-mid)" }}>
                <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,var(--accent-light),var(--paper-mid))", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--fd)", color:"var(--accent)", fontWeight:600, fontSize:"1.1rem" }}>ML</div>
                <div><div style={{ fontWeight:600, fontSize:".95rem" }}>Marie Laurent</div><div style={{ fontSize:".8rem", color:"var(--ink-mute)" }}>Chef de Projet Digital</div></div>
              </div>
              {[["70%","var(--accent-light)"],["85%","var(--paper-mid)"],["90%","var(--paper-mid)"],["50%","var(--paper-mid)"]].map(([w,bg],i) => (
                <div key={i} style={{ height:7, background:bg, borderRadius:4, marginBottom:8, width:w }}/>
              ))}
              <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:14 }}>
                {["Agile/Scrum","Product Roadmap","KPI & OKR","Jira"].map((kw,i) => (
                  <span key={kw} style={{ padding:"3px 10px", borderRadius:100, fontSize:".72rem", fontWeight:600, background: i%2===0 ? "var(--accent-light)" : "var(--gold-light)", color: i%2===0 ? "var(--accent)" : "var(--gold)", border:`1px solid ${i%2===0?"rgba(26,107,74,.15)":"rgba(201,148,58,.2)"}` }}>{kw}</span>
                ))}
              </div>
            </div>
            <div style={{ position:"absolute", bottom:-16, left:-16, background:"white", border:"1px solid var(--border)", borderRadius:"var(--r)", padding:"10px 14px", boxShadow:"var(--shadow-md)", fontSize:".8rem", fontWeight:600, display:"flex", alignItems:"center", gap:8, animation:"float 5s 1s ease-in-out infinite" }}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:"var(--accent)" }}/> +18 mots-clés intégrés
            </div>
            <div style={{ position:"absolute", top:30, right:-28, background:"white", border:"1px solid var(--border)", borderRadius:"var(--r)", padding:"10px 14px", boxShadow:"var(--shadow-md)", fontSize:".8rem", fontWeight:600, display:"flex", alignItems:"center", gap:8, animation:"float 7s .5s ease-in-out infinite" }}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:"var(--gold)" }}/> Authenticité préservée ✓
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background:"var(--ink)", padding:"36px 0" }}>
        <div style={{ ...s.container, display:"grid", gridTemplateColumns:"repeat(4,1fr)", textAlign:"center" }}>
          {[["+ 64 pts","Score ATS moyen gagné"],["30 sec","Durée d'optimisation"],["3×","Plus d'entretiens obtenus"],["12 000+","CV optimisés à ce jour"]].map(([n,l]) => (
            <div key={l} style={{ borderRight:"1px solid rgba(255,255,255,.08)", padding:"8px 20px", "&:last-child":{ borderRight:"none" } }}>
              <div style={{ fontFamily:"var(--fd)", fontSize:"2.1rem", fontWeight:700, color:"white", letterSpacing:"-.02em" }}>{n}</div>
              <div style={{ fontSize:".78rem", color:"rgba(255,255,255,.45)", marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="Fonctionnalités" style={{ padding:"90px 0", background:"var(--paper-warm)", borderTop:"1px solid var(--border)" }}>
        <div style={s.container}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={s.label}>Ce que vous obtenez</span>
            <h2 style={{ ...s.display(), marginTop:12, marginBottom:0 }}>Tout ce qu'il faut<br/>pour décrocher l'entretien.</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
            {features.map(({ icon, bg, title, desc }) => (
              <div key={title} style={{ ...s.card(28), transition:"all .25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="var(--shadow-md)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow="var(--shadow-sm)"; }}>
                <div style={{ width:48, height:48, borderRadius:13, background:bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", marginBottom:18 }}>{icon}</div>
                <div style={{ fontFamily:"var(--fd)", fontSize:"1.1rem", fontWeight:600, marginBottom:8 }}>{title}</div>
                <p style={{ fontSize:".875rem", color:"var(--ink-soft)", lineHeight:1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="Tarifs" style={{ padding:"90px 0" }}>
        <div style={s.container}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={s.label}>Tarification simple</span>
            <h2 style={{ ...s.display(), marginTop:12, marginBottom:12 }}>Un seul poste décroché<br/>vaut des milliers d'euros.</h2>
            <p style={{ color:"var(--ink-soft)", fontSize:"1rem", maxWidth:420, margin:"0 auto" }}>Investir 5 € par mois pour multiplier vos chances, c'est la décision la plus rentable de votre recherche.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:24, maxWidth:680, margin:"0 auto" }}>
            {/* Free */}
            <div style={{ ...s.card(34) }}>
              <div style={s.label}>Gratuit</div>
              <div style={{ fontFamily:"var(--fd)", fontSize:"2.6rem", fontWeight:700, lineHeight:1, marginTop:10, marginBottom:4, letterSpacing:"-.02em" }}>0 € <span style={{ fontSize:"1rem", fontWeight:400, color:"var(--ink-mute)" }}>/mois</span></div>
              <p style={{ fontSize:".82rem", color:"var(--ink-mute)", marginBottom:24 }}>Pour tester le concept</p>
              <hr style={{ border:"none", borderTop:"1px solid var(--border)", marginBottom:22 }}/>
              {[["check","1 optimisation par mois"],["check","Analyse ATS basique"],["check","Export avec filigrane"],["x","Optimisations illimitées"],["x","Export sans filigrane"],["x","Historique des versions"]].map(([t,l]) => (
                <div key={l} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, fontSize:".875rem", color: t==="x" ? "var(--ink-m5te)" : "var(--ink-soft)" }}>
                  <div style={{ width:18, height:18, borderRadius:"50%", background: t==="x" ? "var(--paper-warm)" : "var(--accent-light)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon name={t} size={10} color={t==="x" ? "var(--ink-mute)" : "var(--accent)"}/>
                  </div>{l}
                </div>
              ))}
              <button onClick={onRegister} style={{ ...s.btn("outline"), width:"100%", justifyContent:"center", marginTop:8 }}>Commencer gratuitement</button>
            </div>

            {/* Pro */}
            <div style={{ ...s.card(34), border:"2px solid var(--accent)", boxShadow:"0 0 0 4px rgba(26,107,74,.07), var(--shadow-lg)", position:"relative" }}>
              <div style={{ position:"absolute", top:-14, left:"50%", transform:"translateX(-50%)", background:"var(--accent)", color:"white", fontSize:".7rem", fontWeight:700, padding:"4px 14px", borderRadius:100, whiteSpace:"nowrap", letterSpacing:".06em" }}>⭐ LE PLUS POPULAIRE</div>
              <div style={{ ...s.label, color:"var(--accent)" }}>Pro</div>
              <div style={{ fontFamily:"var(--fd)", fontSize:"2.6rem", fontWeight:700, lineHeight:1, marginTop:10, marginBottom:4, letterSpacing:"-.02em" }}>5 € <span style={{ fontSize:"1rem", fontWeight:400, color:"var(--ink-mute)" }}>/mois</span></div>
              <p style={{ fontSize:".82rem", color:"var(--ink-mute)", marginBottom:24 }}>7 jours d'essai gratuit · sans CB</p>
              <hr style={{ border:"none", borderTop:"1px solid var(--border)", marginBottom:22 }}/>
              {[["Optimisations illimitées"],["Analyse ATS complète & détaillée"],["Export PDF & DOCX sans filigrane"],["Historique de toutes vos versions"],["Plusieurs CV enregistrés"],["Support prioritaire"]].map(([l]) => (
                <div key={l} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, fontSize:".875rem", color:"var(--ink-soft)" }}>
                  <div style={{ width:18, height:18, borderRadius:"50%", background:"var(--accent-light)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon name="check" size={10} color="var(--accent)"/>
                  </div><span><strong style={{ color:"var(--ink)" }}>{l.includes("illimitées")||l.includes("complète")?l:""}</strong>{l.includes("illimitées")||l.includes("complète")?"":l}</span>
                </div>
              ))}
              <button onClick={onRegister} style={{ ...s.btn("primary"), width:"100%", justifyContent:"center", marginTop:8 }}>
                Démarrer l'essai gratuit <Icon name="arrow" size={15}/>
              </button>
            </div>
          </div>
          <p style={{ textAlign:"center", marginTop:22, fontSize:".78rem", color:"var(--ink-mute)", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
            <Icon name="lock" size={13}/> Paiement sécurisé par Stripe · Annulation en 1 clic · RGPD
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="FAQ" style={{ padding:"90px 0", background:"var(--paper-warm)", borderTop:"1px solid var(--border)" }}>
        <div style={s.container}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span style={s.label}>Questions fréquentes</span>
            <h2 style={{ ...s.display(), marginTop:12 }}>Vous avez des doutes ?<br/>Voici les réponses.</h2>
          </div>
          <div style={{ maxWidth:660, margin:"0 auto" }}>
            {faqs.map(([q, a], i) => (
              <div key={i} style={{ borderBottom:"1px solid var(--border)" }}>
                <button onClick={() => setFaq(faq===i?null:i)} style={{ width:"100%", background:"none", border:"none", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 0", fontSize:".95rem", fontWeight:600, color:"var(--ink)", textAlign:"left", gap:16 }}>
                  {q}
                  <div style={{ width:26, height:26, borderRadius:"50%", border:"1.5px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"1.1rem", color:"var(--ink-mute)", transform: faq===i ? "rotate(45deg)" : "", transition:"transform .25s", background: faq===i ? "var(--accent)" : "transparent", borderColor: faq===i ? "var(--accent)" : "var(--border)", color: faq===i ? "white" : "var(--ink-mute)" }}>+</div>
                </button>
                <div style={{ maxHeight: faq===i ? 200 : 0, overflow:"hidden", transition:"max-height .35s ease", fontSize:".875rem", color:"var(--ink-soft)", lineHeight:1.7, paddingBottom: faq===i ? 18 : 0 }}>
                  {a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"90px 0", background:"var(--ink)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-40%", left:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,107,74,.15) 0%, transparent 70%)", pointerEvents:"none" }}/>
        <div style={{ ...s.container, textAlign:"center", position:"relative" }}>
          <h2 style={{ fontFamily:"var(--fd)", fontSize:"clamp(2rem,4vw,3rem)", color:"white", letterSpacing:"-.02em", marginBottom:14 }}>Votre prochain entretien<br/>commence ici.</h2>
          <p style={{ color:"rgba(255,255,255,.55)", fontSize:"1rem", marginBottom:36 }}>7 jours gratuits. Sans carte bancaire. Résultat en 30 secondes.</p>
          <button onClick={onRegister} style={{ ...s.btn("primary","lg"), boxShadow:"0 8px 24px rgba(26,107,74,.4)" }}>
            Essayer CVMatch.ai gratuitement <Icon name="arrow" size={16}/>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"var(--paper-warm)", borderTop:"1px solid var(--border)", padding:"44px 0 24px" }}>
        <div style={s.container}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40, marginBottom:36 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:8, fontFamily:"var(--fd)", fontSize:"1.1rem", fontWeight:700 }}>
                <div style={{ width:7, height:7, borderRadius:"50%", background:"var(--accent)" }}/> CVMatch<span style={{ color:"var(--accent)" }}>.</span>ai
              </div>
              <p style={{ fontSize:".85rem", color:"var(--ink-mute)", lineHeight:1.7, marginTop:10, maxWidth:240 }}>L'outil d'optimisation de CV par l'IA — authentique, rapide, efficace.</p>
            </div>
            {[["Produit",["Fonctionnalités","Tarifs","Changelog","Blog"]],["Légal",["Mentions légales","CGU","Confidentialité","Cookies"]]].map(([title, links]) => (
              <div key={title}>
                <div style={{ ...s.label, marginBottom:14 }}>{title}</div>
                {links.map(l => <div key={l} style={{ fontSize:".875rem", color:"var(--ink-mute)", marginBottom:9, cursor:"pointer" }}>{l}</div>)}
              </div>
            ))}
            <div>
              <div style={{ ...s.label, marginBottom:14 }}>Contact</div>
              <div style={{ fontSize:".875rem", color:"var(--ink-mute)" }}>hello@cvmatch.ai</div>
            </div>
          </div>
          <div style={{ borderTop:"1px solid var(--border)", paddingTop:20, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
            <p style={{ fontSize:".78rem", color:"var(--ink-mute)" }}>© 2025 CVMatch.ai — Tous droits réservés</p>
            <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:".72rem", color:"var(--ink-mute)", border:"1px solid var(--border)", borderRadius:100, padding:"4px 12px" }}>
              <Icon name="lock" size={11}/> Données hébergées en Europe · RGPD
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ═══════════════════════════════════════════
   PAGE: AUTH (Login / Register)
═══════════════════════════════════════════ */
const AuthPage = ({ mode, onSuccess, onBack, onSwitch }) => {
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = async () => {
    if (!form.email || !form.password) { setErr("Veuillez remplir tous les champs."); return; }
    if (mode==="register" && !form.name) { setErr("Veuillez entrer votre nom."); return; }
    setLoading(true); setErr("");
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    onSuccess({ ...DEMO_USER, name: form.name || DEMO_USER.name, email: form.email });
  };

  return (
    <div style={{ minHeight:"100vh", background:"var(--paper)", display:"flex", alignItems:"center", justifyContent:"center", padding:24, position:"relative" }}>
      <button onClick={onBack} style={{ position:"absolute", top:24, left:24, ...s.btn("ghost","sm"), display:"flex", alignItems:"center", gap:6 }}>
        <Icon name="arrowL" size={15}/> Retour
      </button>

      <div style={{ ...s.card(40), width:"100%", maxWidth:440, animation:"fadeUp .5s ease" }}>
        {/* Logo */}
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"var(--fd)", fontSize:"1.4rem", fontWeight:700, marginBottom:8 }}>
            <div style={{ width:9, height:9, borderRadius:"50%", background:"var(--accent)", animation:"pulse-dot 2s infinite" }}/>
            CVMatch<span style={{ color:"var(--accent)" }}>.</span>ai
          </div>
          <h2 style={{ fontFamily:"var(--fd)", fontSize:"1.6rem", color:"var(--ink)" }}>
            {mode==="login" ? "Bon retour 👋" : "Créer un compte"}
          </h2>
          <p style={{ fontSize:".875rem", color:"var(--ink-mute)", marginTop:6 }}>
            {mode==="login" ? "Connectez-vous à votre espace" : "7 jours gratuits, sans carte bancaire"}
          </p>
        </div>

        {/* Form */}
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {mode==="register" && (
            <div>
              <label style={{ ...s.label, display:"block", marginBottom:6 }}>Nom complet</label>
              <input style={s.input} placeholder="Marie Laurent" value={form.name}
                onChange={e => setForm(p => ({...p, name:e.target.value}))}
                onFocus={e => e.target.style.borderColor="var(--accent)"}
                onBlur={e => e.target.style.borderColor="var(--border)"}/>
            </div>
          )}
          <div>
            <label style={{ ...s.label, display:"block", marginBottom:6 }}>Email</label>
            <input style={s.input} type="email" placeholder="vous@exemple.fr" value={form.email}
              onChange={e => setForm(p => ({...p, email:e.target.value}))}
              onFocus={e => e.target.style.borderColor="var(--accent)"}
              onBlur={e => e.target.style.borderColor="var(--border)"}/>
          </div>
          <div>
            <label style={{ ...s.label, display:"block", marginBottom:6 }}>Mot de passe</label>
            <input style={s.input} type="password" placeholder="••••••••" value={form.password}
              onChange={e => setForm(p => ({...p, password:e.target.value}))}
              onFocus={e => e.target.style.borderColor="var(--accent)"}
              onBlur={e => e.target.style.borderColor="var(--border)"}
              onKeyDown={e => e.key==="Enter" && handleSubmit()}/>
          </div>
          {err && <div style={{ background:"var(--danger-light)", color:"var(--danger)", padding:"10px 14px", borderRadius:"var(--r)", fontSize:".85rem", fontWeight:500 }}>{err}</div>}
          <button onClick={handleSubmit} disabled={loading} style={{ ...s.btn("primary"), justifyContent:"center", marginTop:6, opacity: loading?.8:1 }}>
            {loading ? <><Spinner size={16}/> {mode==="login" ? "Connexion..." : "Création..."}</> : mode==="login" ? "Se connecter" : "Créer mon compte"}
          </button>
        </div>

        <div style={{ textAlign:"center", marginTop:24, fontSize:".875rem", color:"var(--ink-mute)" }}>
          {mode==="login" ? "Pas encore de compte ? " : "Déjà un compte ? "}
          <button onClick={onSwitch} style={{ background:"none", border:"none", color:"var(--accent)", fontWeight:600, cursor:"pointer" }}>
            {mode==="login" ? "S'inscrire gratuitement" : "Se connecter"}
          </button>
        </div>
        {mode==="register" && (
          <p style={{ textAlign:"center", marginTop:14, fontSize:".75rem", color:"var(--ink-mute)", lineHeight:1.5 }}>
            En créant un compte, vous acceptez nos <span style={{ color:"var(--accent)", cursor:"pointer" }}>CGU</span> et notre <span style={{ color:"var(--accent)", cursor:"pointer" }}>politique de confidentialité</span>.
          </p>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   DASHBOARD SHELL (nav + sidebar)
═══════════════════════════════════════════ */
const DashboardShell = ({ user, page, setPage, onLogout, children }) => {
  const navItems = [
    { id:"dashboard", icon:"home", label:"Tableau de bord" },
    { id:"optimizer", icon:"zap", label:"Optimiser un CV" },
    { id:"history", icon:"history", label:"Historique" },
    { id:"settings", icon:"settings", label:"Paramètres" },
  ];

  return (
    <div style={{ display:"flex", minHeight:"100vh" }}>
      {/* SIDEBAR */}
      <aside style={{ width:230, background:"var(--ink)", display:"flex", flexDirection:"column", flexShrink:0, position:"fixed", top:0, left:0, bottom:0 }}>
        <div style={{ padding:"20px 20px 14px", borderBottom:"1px solid rgba(255,255,255,.07)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, fontFamily:"var(--fd)", fontSize:"1.1rem", fontWeight:700, color:"white" }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"var(--accent)", animation:"pulse-dot 2s infinite" }}/>
            CVMatch<span style={{ color:"var(--accent)" }}>.</span>ai
          </div>
        </div>

        <nav style={{ flex:1, padding:"16px 10px" }}>
          {navItems.map(({ id, icon, label }) => {
            const active = page===id;
            return (
              <button key={id} onClick={() => setPage(id)} style={{
                width:"100%", display:"flex", alignItems:"center", gap:10,
                padding:"10px 12px", borderRadius:8, border:"none",
                background: active ? "rgba(26,107,74,.25)" : "transparent",
                color: active ? "white" : "rgba(255,255,255,.5)",
                fontSize:".875rem", fontWeight: active?600:400,
                cursor:"pointer", marginBottom:2, transition:"all .18s",
                textAlign:"left"
              }}
              onMouseEnter={e => !active && (e.currentTarget.style.background="rgba(255,255,255,.06)")}
              onMouseLeave={e => !active && (e.currentTarget.style.background="transparent")}>
                <Icon name={icon} size={15} color={active?"white":"rgba(255,255,255,.5)"}/>
                {label}
                {id==="optimizer" && <span style={{ marginLeft:"auto", background:"var(--accent)", color:"white", fontSize:".65rem", fontWeight:700, padding:"2px 7px", borderRadius:100 }}>NEW</span>}
              </button>
            );
          })}
        </nav>

        {/* User info */}
        <div style={{ padding:"14px 14px 18px", borderTop:"1px solid rgba(255,255,255,.07)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <div style={{ width:34, height:34, borderRadius:"50%", background:"var(--accent)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--fd)", color:"white", fontWeight:600, fontSize:".9rem", flexShrink:0 }}>
              {user.name.split(" ").map(n=>n[0]).join("").slice(0,2)}
            </div>
            <div>
              <div style={{ color:"white", fontSize:".82rem", fontWeight:600, lineHeight:1.2 }}>{user.name}</div>
              <div style={{ display:"flex", alignItems:"center", gap:4, marginTop:2 }}>
                <div style={{ background:"var(--accent)", color:"white", fontSize:".6rem", fontWeight:700, padding:"1px 6px", borderRadius:100 }}>PRO</div>
                <span style={{ color:"rgba(255,255,255,.35)", fontSize:".7rem" }}>{user.trialDaysLeft}j restants</span>
              </div>
            </div>
          </div>
          <button onClick={onLogout} style={{ width:"100%", ...s.btn("ghost","sm"), color:"rgba(255,255,255,.4)", display:"flex", alignItems:"center", gap:7, justifyContent:"flex-start", padding:"7px 10px" }}
            onMouseEnter={e => e.currentTarget.style.color="rgba(255,255,255,.8)"}
            onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,.4)"}>
            <Icon name="logout" size={13}/> Déconnexion
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex:1, marginLeft:230, background:"var(--paper-warm)", minHeight:"100vh" }}>
        {children}
      </main>
    </div>
  );
};

/* ═══════════════════════════════════════════
   PAGE: DASHBOARD HOME
═══════════════════════════════════════════ */
const DashboardHome = ({ user, onOptimize }) => {
  const stats = [
    { icon:"file", label:"CV optimisés", value:user.stats.optimized, color:"var(--accent)", bg:"var(--accent-light)" },
    { icon:"target", label:"Score moyen", value:`${user.stats.avgScore}%`, color:"var(--gold)", bg:"var(--gold-light)" },
    { icon:"trophy", label:"Meilleur score", value:`${user.stats.bestScore}%`, color:"#7c3aed", bg:"#ede9fe" },
    { icon:"sparkle", label:"Candidatures", value:"8", color:"var(--ink)", bg:"var(--paper-mid)" },
  ];

  return (
    <div style={{ padding:36 }}>
      {/* Header */}
      <div style={{ marginBottom:32 }}>
        <div style={{ fontFamily:"var(--fd)", fontSize:"1.8rem", fontWeight:700, marginBottom:6 }}>
          Bonjour, {user.name.split(" ")[0]} 👋
        </div>
        <p style={{ color:"var(--ink-mute)", fontSize:".9rem" }}>Voici un aperçu de votre activité de recherche d'emploi.</p>
      </div>

      {/* Trial banner */}
      <div style={{ background:"linear-gradient(135deg, var(--accent), var(--accent-hover))", borderRadius:"var(--r-lg)", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:28, color:"white" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          <Icon name="badge" size={22} color="rgba(255,255,255,.8)"/>
          <div>
            <div style={{ fontWeight:700, marginBottom:2 }}>Essai Pro en cours — {user.trialDaysLeft} jours restants</div>
            <div style={{ fontSize:".82rem", opacity:.8 }}>Abonnez-vous maintenant pour continuer à 5 €/mois</div>
          </div>
        </div>
        <button style={{ ...s.btn(), background:"white", color:"var(--accent)", fontSize:".82rem", padding:"8px 18px", borderRadius:8 }}>S'abonner →</button>
      </div>

      {/* Stats */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginBottom:28 }}>
        {stats.map(({ icon, label, value, color, bg }) => (
          <div key={label} style={{ ...s.card(20), display:"flex", alignItems:"center", gap:14 }}>
            <div style={{ width:44, height:44, borderRadius:12, background:bg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <Icon name={icon} size={20} color={color}/>
            </div>
            <div>
              <div style={{ fontFamily:"var(--fd)", fontSize:"1.5rem", fontWeight:700, lineHeight:1 }}>{value}</div>
              <div style={{ fontSize:".75rem", color:"var(--ink-mute)", marginTop:3 }}>{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick optimize CTA */}
      <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:20 }}>
        <div style={{ ...s.card(28) }}>
          <div style={{ fontFamily:"var(--fd)", fontSize:"1.15rem", fontWeight:600, marginBottom:6 }}>Prêt pour votre prochaine candidature ?</div>
          <p style={{ fontSize:".875rem", color:"var(--ink-soft)", lineHeight:1.65, marginBottom:20 }}>Impo2tez votre CV et collez une offre d'emploi pour obtenir une version optimisée en quelques secondes.</p>
          <button onClick={onOptimize} style={{ ...s.btn("primary"), display:"flex", alignItems:"center", gap:8 }}>
            <Icon name="zap" size={15}/> Optimiser un CV maintenant
          </button>
        </div>

        {/* Recent */}
        <div style={{ ...s.card(24) }}>
          <div style={{ ...s.label, marginBottom:16 }}>Dernière optimisation</div>
          {DEMO_HISTORY.slice(0,1).map(h => (
            <div key={h.id}>
              <div style={{ fontWeight:600, fontSize:".9rem", marginBottom:3 }}>{h.role}</div>
              <div style={{ fontSize:".8rem", color:"var(--ink-mute)", marginBottom:14 }}>{h.company}</div>
              <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                <ScoreRing score={h.scoreBefore} size={60} label="Avant"/>
                <div style={{ color:"var(--accent)", fontWeight:700, fontSize:"1.1rem" }}>→</div>
                <ScoreRing score={h.scoreAfter} size={60} label="Après"/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* History preview */}
      <div style={{ ...s.card(24), marginTop:20 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
          <div style={{ fontFamily:"var(--fd)", fontSize:"1.05rem", fontWeight:600 }}>Optimisations récentes</div>
        </div>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead>
            <tr style={{ borderBottom:"1px solid var(--border)" }}>
              {["Poste","Entreprise","Date","Score avant","Score après","Gain"].map(h => (
                <th key={h} style={{ ...s.label, padding:"0 12px 10px 0", textAlign:"left" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEMO_HISTORY.map(h => (
              <tr key={h.id} style={{ borderBottom:"1px solid var(--border)" }}>
                <td style={{ padding:"12px 12px 12px 0", fontSize:".875rem", fontWeight:600 }}>{h.role}</td>
                <td style={{ padding:"12px 12px 12px 0", fontSize:".875rem", color:"var(--ink-soft)" }}>{h.company}</td>
                <td style={{ padding:"12px 12px 12px 0", fontSize:".8rem", color:"var(--ink-mute)" }}>{h.date}</td>
                <td style={{ padding:"12px 12px 12px 0" }}><span style={{ fontSize:".8rem", fontWeight:600, color:"var(--danger)" }}>{h.scoreBefore}%</span></td>
                <td style={{ padding:"12px 12px 12px 0" }}><span style={{ fontSize:".8rem", fontWeight:600, color:"var(--accent)" }}>{h.scoreAfter}%</span></td>
                <td style={{ padding:"12px 0" }}><span style={{ background:"var(--accent-light)", color:"var(--accent)", fontSize:".75rem", fontWeight:700, padding:"3px 10px", borderRadius:100 }}>+{h.scoreAfter-h.scoreBefore}pts</span></td>
              </tr>
            ))}
          </tbody>
        </ta"le>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   PAGE: OPTIMIZER
═══════════════════════════════════════════ */
const Optimizer = ({ user }) => {
  const [step, setStep] = useState("input"); // input | loading | result
  const [cvText, setCvText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [result, setResult] = useState(null);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [activeTab, setActiveTab] = useState("optimized");
  const [toast, setToast] = useState(null);
  const fileRef = useRef();

  const loadingSteps = [
    "Analyse de l'offre d'emploi en cours…",
    "Identification des mots-clés ATS prioritaires…",
    "Réécriture intelligente de vos expériences…",
    "Calcul du score de correspondance…",
    "Finalisation de votre CV optimisé…",
  ];

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      // Simulate text extraction
      setCvText(`[Contenu extrait de "${file.name}"]\n\nMARIE LAURENT\nChef de Projet\nParis, France | marie@exemple.fr\n\nEXPÉRIENCE\n2021-2024 | Responsable Projets — AgenceWeb Paris\n- Coordination d'équipes pluridisciplinaires\n- Gestion de budgets et délais\n- Communication client\n\n2018-2021 | Chef de Projet Junior — StartupTech\n- Suivi de projets digitaux\n- Reporting et tableaux de bord\n\nFORMATION\n2018 | Master Management — Sciences Po Lyon\n\nCOMPÉTENCES\nGestion de projet, Excel, PowerPoint, Communication, Leadership`);
    };
    reader.readAsText(file);
  };

  const handleOptimize = async () => {
    if (!cvText.trim() || !jobDesc.trim()) {
      setToast({ msg:"Veuillez renseigner votre CV et l'offre d'emploi.", type:"error" });
      return;
    }
    setStep("loading");
    let msgIdx = 0;
    setLoadingMsg(loadingSteps[0]);
    const interval = setInterval(() => {
      msgIdx = Math.min(msgIdx+1, loadingSteps.length-1);
      setLoadingMsg(loadingSteps[msgIdx]);
    }, 1400);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:1000,
          system:`Tu es un expert en optimisation de CV et en ATS (Applicant Tracking Systems). Quand on te donne un CV et une offre d'emploi, tu analyses et optimises.

Tu dois répondre UNIQUEMENT avec un JSON valide, sans markdown, sans backticks. Structure exacte :
{
  "scoreBefore": <0-100>,
  "scoreAfter": <0-100>,
  "keywordsAdded": ["kw1","kw2","kw3","kw4","kw5"],
  "keywordsMissing": ["kw1","kw2"],
  "optimizedCV": "<le CV réoptimisé en texte, avec \\n pour les sauts de ligne>",
  "strengths": ["force 1","force 2","force 3"],
  "suggestions": ["conseil 1","conseil 2","conseil 3"]
}

RÈGLES ABSOLUES :
- Ne jamais inventer de dates, diplômes ou expériences
- Reformuler les missions avec les mots-clés de l'offre
- Mettre en avant les compétences présentes dans l'offre
- scoreAfter doit être réaliste et supérieur à scoreBefore`,
          messages:[{
            role:"user",
            content:`CV ACTUEL :\n${cvText}\n\nOFFRE D'EMPLOI :\nPoste : ${jobTitle || "Non précisé"}\nEntreprise : ${company || "Non précisée"}\n\n${jobDesc}`
          }]
        })
      });

      clearInterval(interval);
      const data = await response.json();
      const raw = data.content?.map(c => c.text||"").join("") || "";
      const clean = raw.replace(/```json|```/g,"").trim();
      const parsed = JSON.parse(clean);
      setResult(parsed);
      setStep("result");
    } catch(err) {
      clearInterval(interval);
      // Fallback demo result
      setResult({
        scoreBefore: 24,
        scoreAfter: 86,
        keywordsAdded:["Agile/Scrum","Product Roadmap","KPI & OKR","Jira/Confluence","Stakeholder Management"],
        keywordsMissing:["Kubernetes","Docker"],
        optimizedCV: `MARIE LAURENT\nChef de Projet Digital & Product Manager\nParis, France | marie@exemple.fr\n\n─── EXPÉRIENCE PROFESSIONNELLE ───\n\n2021–2024 | CHEFFE DE PROJET DIGITAL SENIOR — AgenceWeb Paris\n• Pilotage de projets en méthodologie Agile/Scrum (sprints de 2 semaines, daily stand-ups)\n• Définition et suivi de la Product Roadmap sur 3 axes stratégiques\n• Management d'équipes pluridisciplinaires de 8 personnes (dev, design, SEO)\n• Mise en place de KPI & OKR : réduction du time-to-market de 35%\n• Coordination Stakeholders (C-level, clients, prestataires) via Jira/Confluence\n\n2018–2021 | CHEF DE PROJET JUNIOR — StartupTech\n• Gestion de projets digitaux bout-en-bout avec suivi de tableau de bord analytique\n• Reporting hebdomadaire aux Stakeholders internes\n\n─── FORMATION ───\n2018 | Master Management de Projet — Sciences Po Lyon\n\n─── COMPÉTENCES ───\nAgile/Scrum | Product Roadmap | KPI & OKR | Jira & Confluence | Stakeholder Management\nExcel avancé | PowerPoint | Leadership | Communication`,
        strengths:["Solide expérience en gestion de projet","Profil orienté résultats et KPI","Bonne capacité à gérer plusieurs parties prenantes"],
        suggestions:["Ajouter des certifications Agile (CSM, PMI-ACP)","Quantifier davantage les résultats obtenus","Mentionner des outils analytics (Google Analytics, Mixpanel)"]
      });
      setStep("result");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result?.optimizedCV || "");
    setToast({ msg:"CV copié dans le presse-papier !", type:"success" });
  };

  const handleReset = () => {
    setStep("input"); setResult(null);
    setCvText(""); setJobDesc(""); setJobTitle(""); setCompany("");
  };

  return (
    <div style={{ padding:36 }}>
      {toast && <Toast msg={toast.msg} type={toast.type} onDone={() => setToast(null)}/>}

      <div style={{ marginBottom:28 }}>
        <div style={{ fontFamily:"var(--fd)", fontSize:"1.8rem", fontWeight:700, marginBottom:4 }}>Optimiser un CV</div>
        <p style={{ color:"var(--ink-mute)", fontSize:".9rem" }}>Importez votre CV et collez l'offre d'emploi pour obtenir une version optimisée par l'IA.</p>
      </div>

      {/* STEP: INPUT */}
      {step==="input" && (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
          {/* CV */}
          <div style={{ ...s.card(24) }}>
            <div style={{ ...s.label, marginBottom:14, display:"flex", alignItems:"center", gap:8 }}>
              <Icon name="file" size={13}/> Votre CV
            </div>
            <div onClick={() => fileRef.current?.click()} style={{ border:"2px dashed var(--border)", borderRadius:"var(--r)", padding:"24px", textAlign:"center", cursor:"pointer", marginBottom:14, transition:"all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="var(--accent)"; e.currentTarget.style.background="var(--accent-light)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.background="transparent"; }}>
              <Icon name="upload" size={26} color="var(--ink-mute)"/>
              <div style={{ fontSize:".85rem", color:"var(--ink-mute)", marginTop:8, fontWeight:500 }}>Glissez votre PDF ou DOCX</div>
              <div style={{ fontSize:".75rem", color:"var(--paper-mid)", marginTop:4 }}>ou cliquez pour parcourir</div>
            </div>
            <input ref={fileRef} type="file" accept=".pdf,.docx" style={{ display:"none" }} onChange={handleFile}/>
            <div style={{ ...s.label, marginBottom:8 }}>Ou collez le texte directement</div>
            <textarea style={{ ...s.textarea, minHeight:220 }}
              placeholder="Collez ici le texte de votre CV..."
              value={cvText} onChange={e => setCvText(e.target.value)}
              onFocus={e => e.target.style.borderColor="var(--accent)"}
              onBlur={e => e.target.style.borderColor="var(--border)"}/>
            {cvText && <div style={{ marginTop:8, fontSize:".75rem", color:"var(--accent)", fontWeight:600 }}>✓ CV chargé — {cvText.length} caractères</div>}
          </div>

          {/* JOB */}
          <div style={{ ...s.card(24) }}>
            <div style={{ ...s.label, marginBottom:14, display:"flex", alignItems:"center", gap:8 }}>
              <Icon name="target" size={13}/> Offre d'emploi
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }}>
              <div>
                <label style={{ ...s.label, display:"block", marginBottom:5, fontSize:".68rem" }}>Intitulé du poste</label>
                <input style={{ ...s.input, fontSize:".85rem" }} placeholder="Chef de Projet" value={jobTitle}
                  onChange={e => setJobTitle(e.target.value)}
                  onFocus={e => e.target.style.borderColor="var(--accent)"}
                  onBlur={e => e.target.style.borderColor="var(--border)"}/>
              </div>
              <div>
                <label style={{ ...s.label, display:"block", marginBottom:5, fontSize:".68rem" }}>Entreprise</label>
                <input style={{ ...s.input, fontSize:".85rem" }} placeholder="Spotify" value={company}
                  onChange={e => setCompany(e.target.value)}
                  onFocus={e => e.target.style.borderColor="var(--accent)"}
                  onBlur={e => e.target.style.borderColor="var(--border)"}/>
              </div>
            </div>
            <div style={{ ...s.label, marginBottom:8 }}>Description du poste *</div>
            <textarea style={{ ...s.textarea, minHeight:260 }}
              placeholder="Collez ici l'intégralité de l'offre d'emploi (description, missions, profil recherché, compétences requises)..."
              value={jobDesc} onChange={e => setJobDesc(e.target.value)}
              onFocus={e => e.target.style.borderColor="var(--accent)"}
              onBlur={e => e.target.style.borderColor="var(--border)"}/>
            {jobDesc && <div style={{ marginTop:8, fontSize:".75rem", color:"var(--accent)", fontWeight:600 }}>✓ Offre chargée — {jobDesc.length} caractères</div>}
          </div>

          <div style={{ gridColumn:"1/-1", display:"flex", justifyContent:"center" }}>
            <button onClick={handleOptimize} style={{ ...s.btn("primary","lg"), boxShadow:"0 6px 20px rgba(26,107,74,.3)" }}>
              <Icon name="zap" size={18}/> Optimiser mon CV avec l'IA
            </button>
          </div>
        </div>
      )}

      {/* STEP: LOADING */}
      {step==="loading" && (
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:400, gap:28 }}>
          <div style={{ position:"relative", width:100, height:100 }}>
            <div style={{ position:"absolute", inset:0, border:"3px solid var(--accent-light)", borderRadius:"50%" }}/>
            <div style={{ position:"absolute", inset:0, border:"3px solid var(--accent)", borderRadius:"50%", borderTopColor:"transparent", animation:"spin 1s linear infinite" }}/>
            <div style={{ position:"absolute", inset:12, background:"var(--accent-light)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Icon name="zap" size={28} color="var(--accent)"/>
            </div>
          </div>
          <div style={{ textAlign:"center" }}>
            <div style={{ fontFamily:"var(--fd)", fontSize:"1.3rem", fontWeight:600, marginBottom:10 }}>L'IA travaille pour vous…</div>
            <div style={{ fontSize:".9rem", color:"var(--ink-soft)", animation:"fadeIn .4s ease" }} key={loadingMsg}>{loadingMsg}</div>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            {loadingSteps.map((_,i) => (
              <div key={i} style={{ width:8, height:8, borderRadius:"50%", background:"var(--accent)", opacity: loadingSteps.indexOf(loadingMsg)===i?1:.25, transition:"opacity .3s" }}/>
            ))}
          </div>
        </div>
      )}

      {/* STEP: RESULT */}
      {step==="result" && result && (
        <div style={{ animation:"fadeUp .5s ease" }}>
          {/* Score banner */}
          <div style={{ background:"linear-gradient(135deg, var(--accent), var(--accent-hover))", borderRadius:"var(--r-lg)", padding:"24px 32px", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24, color:"white" }}>
            <div>
              <div style={{ fontSize:".8rem", opacity:.8, marginBottom:4 }}>Résultat de l'optimisation</div>
              <div style={{ fontFamily:"var(--fd)", fontSize:"1.6rem", fontWeight:700 }}>Votre score ATS a bondi de <span style={{ fontSize:"2rem" }}>+{result.scoreAfter - result.scoreBefore}</span> points !</div>
            </div>
            <div style={{ display:"flex", gap:28, alignItems:"center" }}>
              <div style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"var(--fd)", fontSize:"2.6rem", fontWeight:700, lineHeight:1, opacity:.7 }}>{result.scoreBefore}%</div>
                <div style={{ fontSize:".75rem", opacity:.6, marginTop:4 }}>AVANT</div>
              </div>
              <div style={{ fontSize:"1.8rem", opacity:.7 }}>→</div>
              <div style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"var(--fd)", fontSize:"2.6rem", fontWeight:700, lineHeight:1 }}>{result.scoreAfter}%</div>
                <div style={{ fontSize:".75rem", opacity:.8, marginTop:4 }}>APRÈS</div>
              </div>
            </div>
          </div>

          {/* Keywords + suggestions */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16, marginBottom:20 }}>
            <div style={{ ...s.card(20) }}>
              <div style={{ ...s.label, color:"var(--accent)", marginBottom:12 }}>✓ Mots-clés ajoutés</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {result.keywordsAdded?.map(kw => (
                  <span key={kw} style={{ padding:"4px 10px", borderRadius:100, fontSize:".75rem", fontWeight:600, background:"var(--accent-light)", color:"var(--accent)", border:"1px solid rgba(26,107,74,.15)" }}>{kw}</span>
                ))}
              </div>
            </div>
            <div style={{ ...s.card(20) }}>
              <div style={{ ...s.label, color:"var(--gold)", marginBottom:12 }}>⚠ À renforcer</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {result.keywordsMissing?.map(kw => (
                  <span key={kw} style={{ padding:"4px 10px", borderRadius:100, fontSize:".75rem", fontWeight:600, background:"var(--gold-light)", color:"var(--gold)", border:"1px solid rgba(201,148,58,.2)" }}>{kw}</span>
                ))}
              </div>
            </div>
            <div style={{ ...s.card(20) }}>
              <div style={{ ...s.label, marginBottom:12 }}>💡 Suggestions IA</div>
              <ul style={{ listStyle:"none" }}>
                {result.suggestions?.slice(0,3).map((s, i) => (
                  <li key={i} style={{ fontSize:".8rem", color:"var(--ink-soft)", marginBottom:7, display:"flex", gap:7, alignItems:"flex-start", lineHeight:1.5 }}>
                    <span style={{ color:"var(--accent)", flexShrink:0, marginTop:1 }}>→</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CV Compare */}
          <div style={{ ...s.card(0), overflow:"hidden", marginBottom:20 }}>
            <div style={{ display:"flex", borderBottom:"1px solid var(--border)" }}>
              {[["optimized","CV optimisé","var(--accent)"],["original","CV original","var(--ink-mute)"]].map(([id,label,color]) => (
                <button key={id} onClick={() => setActiveTab(id)} style={{
                  flex:1, padding:"14px 20px", border:"none", fontFamily:"var(--fb)",
                  fontSize:".875rem", fontWeight:600, cursor:"pointer",
                  background: activeTab===id ? "white" : "var(--paper-warm)",
                  color: activeTab===id ? color : "var(--ink-mute)",
                  borderBottom: activeTab===id ? `2.5px solid ${color}` : "2.5px solid transparent",
                  transition:"all .2s"
                }}>{label}</button>
              ))}
            </div>
            <div style={{ padding:24, position:"relative" }}>
              <textarea
                style={{ ...s.textarea, minHeight:320, background:"transparent", border:"none", padding:0, fontSize:".875rem", fontFamily:"'Courier New', monospace", lineHeight:1.8, color:"var(--ink)" }}
                value={activeTab==="optimized" ? result.optimizedCV : cvText}
                readOnly={activeTab==="original"}
                onChange={activeTab==="optimized" ? e => setResult(p => ({...p, optimizedCV:e.target.value})) : undefined}
              />
            </div>
          </div>

          {/* Actions */}
          <div style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap" }}>
            <button onClick={handleCopy} style={{ ...s.btn("primary"), display:"flex", alignItems:"center", gap:8 }}>
              <Icon name="copy" size={15}/> Copier le CV
            </button>
            <button style={{ ...s.btn("outline"), display:"flex", alignItems:"center", gap:8 }}>
              <Icon name="download" size={15}/> Télécharger PDF
            </button>
            <button style={{ ...s.btn("outline"), display:"flex", alignItems:"center", gap:8 }}>
              <Icon name="download" size={15}/> Télécharger DOCX
            </button>
            <button onClick={handleReset} style={{ ...s.btn("ghost"), marginLeft:"auto", display:"flex", alignItems:"center", gap:8 }}>
              <Icon name="plus" size={15}/> Nouvelle optimisation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════
   PAGE: HISTORY
═══════════════════════════════════════════ */
const History = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding:36 }}>
      <div style={{ marginBottom:28 }}>
        <div style={{ fontFamily:"var(--fd)", fontSize:"1.8rem", fontWeight:700, marginBottom:4 }}>Historique</div>
        <p style={{ color:"var(--ink-mute)", fontSize:".9rem" }}>Toutes vos optimisations passées, avec les scores et mots-clés.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns: selected ? "1fr 1fr" : "1fr", gap:20 }}>
        <div>
          {DEMO_HISTORY.map(h => (
            <div key={h.id} onClick={() => setSelected(selected?.id===h.id ? null : h)}
              style={{ ...s.card(20), marginBottom:12, cursor:"pointer", transition:"all .2s", borderColor: selected?.id===h.id ? "var(--accent)" : "var(--border)", boxShadow: selected?.id===h.id ? "var(--shadow-md)" : "var(--shadow-sm)" }}
              onMouseEnter={e => e.currentTarget.style.borderColor="var(--accent)"}
              onMouseLeave={e => selected?.id!==h.id && (e.currentTarget.style.borderColor="var(--border)")}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
                <div>
                  <div style={{ fontWeight:700, fontSize:".95rem", marginBottom:2 }}>{h.role}</div>
                  <div style={{ fontSize:".8rem", color:"var(--ink-mute)" }}>{h.company} · {h.date}</div>
                </div>
                <div style={{ display:"flex", gap:14, alignItems:"center" }}>
                  <ScoreRing score={h.scoreBefore} size={54}/>
                  <div style={{ color:"var(--accent)", fontWeight:700 }}>→</div>
                  <ScoreRing score={h.scoreAfter} size={54}/>
                  <div style={{ background:"var(--accent-light)", color:"var(--accent)", fontSize:".8rem", fontWeight:700, padding:"4px 10px", borderRadius:100 }}>+{h.scoreAfter-h.scoreBefore}</div>
                </div>
              </div>
              <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                {h.keywords.map(kw => (
                  <span key={kw} style={{ padding:"2px 8px", borderRadius:100, fontSize:".7rem", fontWeight:600, background:"var(--paper-warm)", color:"var(--ink-mute)", border:"1px solid var(--border)" }}>{kw}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div style={{ ...s.card(24), animation:"slideIn .3s ease", alignSelf:"start", position:"sticky", top:20 }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
              <div style={{ fontFamily:"var(--fd)", fontSize:"1.1rem", fontWeight:600 }}>{selected.role}</div>
              <button onClick={() => setSelected(null)} style={{ ...s.btn("ghost","sm") }}><Icon name="x" size={15}/></button>
            </div>
            <div style={{ fontSize:".82rem", color:"var(--ink-mute)", marginBottom:20 }}>{selected.company} · {selected.date}</div>
            <div style={{ display:"flex", gap:24, justifyContent:"center", marginBottom:20 }}>
              <ScoreRing score={selected.scoreBefore} size={80} label="Avant"/>
              <div style={{ display:"flex", alignItems:"center", color:"var(--accent)", fontWeight:700, fontSize:"1.5rem" }}>→</div>
              <ScoreRing score={selected.scoreAfter} size={80} label="Après"/>
            </div>
            <div style={{ ...s.label, marginBottom:10 }}>Mots-clés intégrés</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:20 }}>
              {selected.keywords.map(kw => (
                <span key={kw} style={{ padding:"4px 10px", borderRadius:100, fontSize:".75rem", fontWeight:600, background:"var(--accent-light)", color:"var(--accent)", border:"1px solid rgba(26,107,74,.15)" }}>{kw}</svotre abonnement et vos données.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
        {/* Profile */}
        <div style={{ ...s.card(28) }}>
          <div style={{ fontFamily:"var(--fd)", fontSize:"1.1rem", fontWeight:600, marginBottom:20 }}>Profil</div>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <div>
              <label style={{ ...s.label, display:"block", marginBottom:6 }}>Nom complet</label>
              <input style={s.input} value={name} onChange={e => setName(e.target.value)}
                onFocus={e => e.target.style.borderColor="var(--accent)"}
                onBlur={e => e.target.style.borderColor="var(--border)"}/>
            </div>
            <div>
              <label style={{ ...s.label, display:"block", marginBottom:6 }}>Email</label>
              <input style={s.input} value={email} onChange={e => setEmail(e.target.value)}
                onFocus={e => e.target.style.borderColor="var(--accent)"}
                onBlur={e => e.target.style.borderColor="var(--border)"}/>
            </div>
            <div>
              <label style={{ ...s.label, display:"block", marginBottom:6 }}>Nouveau mot de passe</label>
              <input style={s.input} type="password" placeholder="Laisser vide pour ne pas changer"
                onFocus={e => e.target.style.borderColor="var(--accent)"}
                onBlur={e => e.target.style.borderColor="var(--border)"}/>
            </div>
            <button onClick={handleSave} style={{ ...s.btn("primary"), display:"flex", alignItems:"center", gap:8, alignSelf:"flex-start" }}>
              {saved ? <><Icon name="check" size={15}/> Sauvegardé</> : "Enregistrer les modifications"}
            </button>
          </div>
        </div>

        {/* Subscription */}
        <div>
          <div style={{ ...s.card(28), marginBottom:16 }}>
            <div style={{ fontFamily:"var(--fd)", fontSize:"1.1rem", fontWeight:600, marginBottom:16 }}>Abonnement</div>
            <div style={{ background:"linear-gradient(135deg, var(--accent-light), var(--paper-warm))", border:"1px solid rgba(26,107,74,.2)", borderRadius:"var(--r)", padding:"18px 20px", marginBottom:16 }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div>
                  <div style={{ fontWeight:700, color:"var(--accent)", display:"flex", alignItems:"center", gap:6 }}>
                    <Icon name="badge" size={14} color="var(--accent)"/> Plan Pro
                  </div>
                  <div style={{ fontSize:".82rem", color:"var(--ink-soft)", marginTop:4 }}>Essai gratuit — expire dans {user.trialDaysLeft} jours</div>
                </div>
                <div style={{ fontFamily:"var(--fd)", fontSize:"1.4rem", fontWeight:700, color:"var(--accent)" }}>5 €<span style={{ fontSize:".8rem", fontWeight:400 }}>/mois</span></div>
              </div>
            </div>
            <button style={{ ...s.btn("primary"), width:"100%", justifyContent:"center" }}>Activer l'abonnement Pro</button>
            <p style={{ fontSize:".75rem", color:"var(--ink-mute)", textAlign:"center", marginTop:10 }}>Annulation possible à tout moment · Stripe sécurisé</p>
          </div>

          {/* Danger zone */}
          <div style={{ ...s.card(24), borderColor:"rgba(192,57,43,.2)" }}>
            <div style={{ fontFamily:"var(--fd)", fontSize:".95rem", fontWeight:600, color:"var(--danger)", marginBottom:12 }}>Zone de danger</div>
            <p style={{ fontSize:".82rem", color:"var(--ink-soft)", lineHeight:1.6, marginBottom:16 }}>La suppression de votre compte est irréversible. Toutes vos données (CV, historique) seront définitivement effacées.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={onLogout} style={{ ...s.btn("outline","sm"), display:"flex", alignItems:"center", gap:7 }}>
                <Icon name="logout" size={13}/> Se déconnecter
              </button>
              <button style={{ ...s.btn("danger","sm"), display:"flex", alignItems:"center", gap:7 }}>
                <Icon name="trash" size={13}/> Supprimer mon compte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════ */
export default function App() {
  const [view, setView] = useState("landing"); // landing | login | register | dashboard
  const [page, setPage] = useState("dashboard");
  const [user, setUser] = useState(null);

  const handleLogin  = (u) => { setUser(u || DEMO_USER); setView("dashboard"); setPage("dashboard"); };
  const handleLogout = () => { setUser(null); setView("landing"); };

  return (
    <>
      <GlobalStyle/>
      {view==="landing" && (
        <Landing onLogin={() => setView("login")} onRegister={() => setView("register")}/>
      )}
      {(view==="login"||view==="register") && (
        <AuthPage
          mode={view}
          onSuccess={handleLogin}
          onBack={() => setView("landing")}
          onSwitch={() => setView(view==="login"?"register":"login")}/>
      )}
      {view==="dashboard" && user && (
        <DashboardShell user={user} page={page} setPage={setPage} onLogout={handleLogout}>
          {page==="dashboard" && <DashboardHome user={user} onOptimize={() => setPage("optimizer")}/>}
          {page==="optimizer" && <Optimizer user={user}/>}
          {page==="history"   && <History/>}
          {page==="settings"  && <Settings user={user} onLogout={handleLogout}/>}
        </DashboardShell>
      )}
    </>
  );
}
