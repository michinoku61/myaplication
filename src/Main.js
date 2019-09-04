import React from 'react';
import Lesson from './Lesson';
// import ContactForm from './ContactForm';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: 'GK 1 Marc-André ter Stegen',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/01_TER-STEGEN-JOC.png',
        introduction: 'マルク・アンドレ・テア・シュテーゲンは19才から最高レベルでの大会に参戦し、特にその足元の上手さから、将来が有望視されていたドイツ人GKであり、それを現実にした形だ。',
      },
      {
        name: 'DF 3 Gerard Piqué',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/03-PIQUE-JOC.jpg',
        introduction: '体格に恵まれた（193cm、85キロ）カタルーニャ人センターバックは、フィジカルの強さと優れたテクニックで空中プレーも得意としており、セットプレーから度々、攻撃に参加する。レアル・サラゴサ時代に証明したように、ボランチとしてもプレーできる。',
      },
      {
        name: 'DF 20 Sergi Roberto',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/20-SROBERTO-JOC.jpg',
        introduction: '14歳で、セルジ・ロベルトは、レウスを離れ、ＦＣバルセロナのマシアへ、力強くやってきた。出身はナスティック・デル・タラゴナであり、このミッドフィルダーは、 2009/10年にデビューを果たしたルイス・エンリケ率いるユースチームで、主軸となるまでに成長した。',
      },
      {
        name: 'DF 18 Jordi Alba',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/18-JORDI-ALBA-JOC.jpg',
        introduction: '類い稀なスピードを持つジョルディ・アルバは、世界でも最もテクニックに秀でた左サイドバックの一人だ。',
      },

      {
        name: 'MF 5 Sergio Busquets',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/05-SERGIO-JOC.jpg',
        introduction: 'セルヒオ・ブスケッツは、世界一の守備的中盤選手と言えるかもしれない。ボールを取り戻す能力に優れ、戦術を読み取る力とテクニックで抜きん出ている。',
      },
      {
        name: 'MF 4 Ivan Rakitic',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/04-RAKITIC-JOC.jpg',
        introduction: 'ラキティッチはポリバレンス性にすぐれ、フィジカルの強い選手であり、中盤の様々な位置でプレーできる。攻撃的だが、チームが必要とすれば守備的にプレーすることもいとわない。プレービジョンだけでなく、パスセンスにも優れ、キャリアを通してアシストメーカーとしても知られている。また、短距離、長距離を問わず、ポテンシャルのあるキックを放ち、フリーキックの名手でもある。セカンドラインからの攻撃に優れており、その結果、本来の美徳ではないが、ゴール数も増えることになっている。',
      },
      {
        name: 'MF 21 Frenkie de Jong',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/D-JONG-JOC.jpg',
        introduction: 'その縦横無尽の動きとエネルギー、素晴らしいビジョンが、継続してスキルを向上させ、中盤のどのポジションでもプレーをできる力を与えている',
      },
      {
        name: 'MF 22 Arturo Vidal',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/22-VIDAL-JOC.jpg',
        introduction: '堅守プレイのみならず、攻撃とのコンビネーション能力、エリア内に攻め込むプレイに秀でているミッドフィルダー',
      },

      {
        name: 'FW 9 Luis Suárez',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/09-SUAREZ-JOC.jpg',
        introduction: 'スアレスは、そのスピードと次のプレーが読めない動き、相手を交わす力、両足で繰り出す力強いシュートなどを兼ね備えており、相手のエリアで一線を画する選手だ。',
      },
      {
        name: 'FW 10 Lionel Messi',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/10-MESSI-JOC.jpg',
        introduction: 'レオ・メッシが世界一の選手なのは、2009、2010、2011年にバロンドールを獲得していることからも、証明されている。その個人プレーが目を引く反面、メッシはチームプレーの象徴であり、手本となる選手だ。',
      },
      {
        name: 'FW 11 Ousmane Dembélé',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/11-DEMBELE-JOC.jpg',
        introduction: '1997年5月15日ヴェルノン（フランス）で生まれたウスマン・デンベレは、世界の若きプレーヤーの中でも最高峰の選手の一人だ。 わずか、20歳で、フランスリーグとブンデスリーガで既に認められ、FCバルセロナにやってきた。相手のバランスを崩す攻撃力とドリブルで、世界サッカーの最高峰の一人と評されている。',
      },
      {
        name: 'FW 17 Antoine Griezmann',
        image: 'https://myapplecation.s3-ap-northeast-1.amazonaws.com/griezzmann-JOC.jpg',
        introduction: 'グリーズマンはよく動き、個人プレー、チームメートとの連携プレーの組み合わせにsグレ、同時にプレスから解放する守備的な仕事もこなす選手だ',
      },


    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <h1>FC Barcelona</h1>
          <h2>member list</h2>
          <h2>Pleage click on the image.</h2>
          <div className='copy-container'>
          </div>
          <div className='lesson-container'>
            { lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={ lessonItem.name }
                  image={ lessonItem.image }
                  introduction={ lessonItem.introduction }
                />
              );
            }) }
          </div>
          <div className='contact-container'>

          </div>
        </div>
      </div>
    );
  }
}

export default Main;
