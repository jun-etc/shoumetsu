var cannons = [
["－砲台選択－","0"],
["－－火属性－－","1"],
["☆5 カリスマDJ アミ","232_1321_4_1_1_1_0_1_0_0_0_1"],
["☆6 傾国の美女 楊貴妃","263_1801_5_1_1_1_5_1_0_2161_0_1"],
["☆5 猛獣使い マイ","341_1211_6_1_1_1_5_0_0_0_0_1"],
["☆6 稀代の歌舞伎役者 ソメノスケ","351_1501_9_1_1_1_5_1_5_1801_0_1"],
["☆5 炎の料理人 シュウ","362_1025_4_1_1_1_0_0_0_0_0_1"],
["☆5 戦場に咲く花 サクラ","391_1025_5_1_1_1_5_1_0_0_0_1"],
["☆5 妙木山のガマ仙人 自来也","399_1203_4_2_1_1_5_1_0_0_0_1"],
["☆6 最後のSP アキラ","475_1485_4_1_1_1_0_1_0_0_0_1"],
["☆5 ゴキゲンなレッド","503_915_4_1_1_1_0_0_0_0_0_1"],
["☆5 一流コンシェルジュ ヒロ","543_1301_4_1_1_1_5_0_0_0_0_1"],
["☆5 第一型ガウェイン","669_1105_7_1_1_1_5_0_0_0_0_1"],
["☆5 竜戦機王ライデン","763_1331_7_1_1_1_0_0_0_0_0_1"],
["☆6 狂乱のネコムート 超激ツヨ","788_1403_4_2_1_1_0_0_0_0_0_1"],
["☆5 狂乱の火の三つ子ニャンゼル","815_1_4_1_1_1_0_0_0_0_0_1"],
["☆6 美しき晴れ姿 アカリ","890_1703_5_1_1_1_0_0_0_2043_0_1"],
["☆5 炎をまといし忍者","906_1349_4_1_1_1_0_0_0_0_0_1"],
["☆6 非情のクィーン ハート","930_1728_1_1_1_1_0_0_0_0_30%_1"],
["☆5 巨人に反撃する者 エレン","944_1294_4_1_1_1_0_0_0_0_0_1"],
["☆6 猫神に選ばれし少女 チヨ","963_1648_5_1_1_1_5_0_0_1977_0_1"],
["☆5 情熱の猛獣使い マイ","986_1357_4_1_0.5_1_0_1_0_0_0_1"],
["☆6 戦慄の万華鏡写輪眼 イタチ","1004_1417_6_1_1_1_0_0_0_0_0_1"],
["☆6 火の意志を継ぐ ナルト＆サスケ","1017_1640_5_1_0.5_1_5_0_0_1968_0_1"],
["☆5 不屈の死神 恋次","1036_1124_7_1_1_1_0_0_0_0_0_1"],
["☆5 猪突猛進の忠義者 一角","1046_1106_4_1_1_1_0_0_0_0_0_1"],
["☆5 傾市の美梨 ようきひっしー","1091_1401_5_1_1_1_5_1_0_0_0_1"],
["☆6 征服の大王 アレキサンダー","1117_1611_5_1_1_1_5_0_0_1933_0_1"],
["☆6 一刀両断の大女優 アイリ","1143_1688_5_1_1_1_2_0_0_2025_0_1"],
["☆6 魔弾の狼銃士 ルナ","1149_1505_5_1_1_1_5_0_0_1806_0_1"],
["☆5 自由奔放な海賊 フジマル","1153_1246_4_1_1_1_5_0_0_0_0_1"],
["☆5 学徒型ニッカール","1186_1186_5_1_1_1_5_0_0_0_0_1"],
["☆5 雪だるま職人 キヨシ","1245_1240_4_2_1_1_0_0_0_0_0_1"],
["☆6 寄りそう者 牧瀬紅莉栖","1259_1602_5_1_1_1_0_0_0_1922_0_1"],
["☆6 決着のSP アキラ","1286_1485_5_1_1_1_0_1_0_0_0_1"],
["☆6 絶技のSP アキラ","1287_1485_4_1_1_1_0_1_0_0_0_2"],
["☆6 ハートシューター ルナ","1290_1505_8_1_1_1_5_1_0_1806_0_1"],
["☆6 打上げの見得 ソメノスケ","1313_1501_6_1_1_1_5_0_0_1801_0_1"],
["☆5 新春演舞 サオリ","1315_1354_4_1_1_1_0_0_0_0_0_1"],
["☆5 渾身の乱れ太鼓 ユタカ","1329_1131_4_1_1_1_0_0_0_0_0_1"],
["☆5 追い続ける者 銭形警部","1361_1285_4_1_1_1_0_0_0_0_0_1"],
["☆6 紅蓮のコールバーン","1365_1625_5_1_1_1_0_0_0_1950_0_1"],
["☆6 真紅のコールバーン","1366_1625_5_2.5_1_1_0_0_0_1950_0_1"],
["☆6 烈火のコールバーン","1367_1625_5_1_1_1_0_0_0_1950_0_4"],
["☆5 戦いのバレンタイン ウルフ","1409_1401_5_1_1_1_5_0_0_0_0_1"],
["☆6 火焔を宿せし猫少女 チヨ","1433_1648_5_1_1_1_5_0_0_1977_0_1"],
["☆6 氷炎を宿せし猫少女 チヨ","1434_1648_5_1_1_1_5_0_0_1977_0_2"],
["☆5 未来を生み出すデザイン ハヤト","1468_1302_4_1_0.5_1_0_0_0_0_0_1"],
["☆5 名も無き 死神","1511_1401_4_1_1_1_5_0_0_0_0_1"],
["☆6 神出鬼没 草薙素子","1516_1723_5_1_1_1_0_0_0_0_0_1"],
["☆5 千両役者 ノブヒコ","1536_1301_4_1_1_1_0_0_0_0_0_1"],
["☆5 スプリングブロッサム マイ","1571_1375_4_1_1_1_0_0_0_0_0_1"],
["☆5 どこまでも続く今 キョウ","1589_1338_7_1_1_1_0_0_0_0_0_1"],
["☆6 手を引く守護者 アキラ","1599_1697_5_1_1_1_5_0_0_2036_0_1"],
["☆5 DJクイーン アミ","1611_1356_1_1_1_1_5_0_0_0_0_1"],
["☆5 炎護射撃車ウーウー","1633_1297_4_1_0.5_1_0_0_0_0_0_1"],
["☆5 武神・真田幸村","1635_1301_4_1.5_1_1_0_0_0_0_0_1"],
["☆5 窓辺の姫君ネコ","1637_1283_4_1_1_1_0_0_0_0_0_1"],
["☆5 狂乱のネコダラボッチ","1639_1204_6_1_1_1_0_0_0_0_0_1"],
["☆6 教室の幼き支配者 ミウ","1681_1714_5_1_1_1_0_0_0_2056_0_1"],
["☆6 火の滅竜魔導士 ナツ","1692_1706_5_1_1_1_0_0_0_2047_0_1"],
["☆5 鉄の滅竜魔導士 ガジル","1702_1292_4_1_1_1_0_0_0_0_0_1"],
["☆6 恋の矢乱射の花嫁 ルナ","1721_1704_5_2_1_1_0_0_0_2044_0_1"],
["☆6 夏の恋を究明する者 ユイコ","1765_1696_5_1_1_1_0_0_0_2035_0_1"],
["☆5 ジャック・ザ・マリン","1769_1358_4_1_1_1_0_0_0_0_0_1"],
["☆5 ファイアーダンス サオリ","1771_1341_4_1_1_1_0_0_0_0_0_1"],
["☆5 オールクラッシャー タスク","1841_1409_5_1_1_1_0_0_0_0_0_1"],
["☆5 専属マネージャー シュウトク","1852_1105_4_1_1_1_0_0_0_0_0_1"],
["☆6 夢の共演 アミfeat.初音ミク","1876_1739_5_1_1_1_5_0_0_2086_0_1"],
["☆6 ジンニーヤの願望 カズサ","1905_1719_10_1_1_1_0_0_0_2062_0_1"],
["☆5 なりきりミニデビル ヒロキ","2117_1326_4_1_1_1_0_0_0_0_0_1"],
["☆6 賭遊戯の女帝 フラヴィア","2129_1781_5_2_1_1_0_0_0_2137_0_1"],
["☆5 解呪の炎魔女 クレール","2139_1279_4_1_1_1_0_0_0_0_0_1"],
["☆5 躍動の炎剣士 モイ","2143_1359_4_1_0.5_1_0_0_0_0_0_1"],
["☆6 破壊をもたらす煌女 カヤ","2192_1631_1_1_1_1_5_0_0_0_20%_1"],
["☆5 天草式の女教皇 神裂火織","2236_1350_5_1_1_1_0_0_0_0_0_1"],
["☆6 破魔矢の射手 ルナ","2244_1698_8_1_1_1_0_0_0_2037_0_1"],
["☆6 覇王 アレキサンダー","2303_1611_5_1_1_1_5_0_0_1933_0_1"],
["☆6 大英雄の系譜 アレキサンダー","2304_1611_5_1_1_1_5_0_0_1933_0_5"],
["☆6 ダウジングトンファー ゴウタ","2318_1486_-1_1_1_1_0_0_0_0_0_1"],
["☆6 煉獄の奇術師 ヨシアキ","2337_1736_10_1_1_1_0_0_0_2083_0_1"],
["☆5 快楽の虐殺者”D”","2343_1378_5_1_1_1_0_0_0_0_0_1"],
["☆5 外敵型バン","2371_1408_4_1_1_1_0_0_0_0_0_1"],
["☆5 エッグコンシェルジュ ヒロ","2411_1368_4_1_1_1_0_0_0_0_0_1"],
["☆5 爆食女子 ユイコ","2539_1355_-1_1_1_1_0_0_0_0_0_1"],
["☆6 浜辺の撃墜少女 ルナ","2552_1633_-1_1_1_1_0_0_0_1959_0_1"],
["☆6 華麗なる海軍将校 ツバサ","2612_1700_4_1_1_1_0_0_0_2040_0_1"],
["☆6 未来からの技術者 アルファ","2633_1715_8_1_1_1_0_0_0_0_0_1"],
["☆5 ハンターパンサー サオリ","2648_1388_7_1_1_1_0_0_0_0_0_1"],
["☆6 焔の錬金術師 ロイ","2675_1735_-1_1_1_1_0_0_0_0_0_1"],
["☆6 熱情のファゴット奏者 クオン","2714_1701_5_1_1_1_0_0_0_2041_0_1"],
["☆6 ジャック爆誕 カンキチ","2805_1712_5_1_1_1_0_0_0_2054_0_1"],
["☆5 最高の思いつき ホノカ","2820_1369_-1_1_1_1_0_0_0_0_0_1"],
["☆6 ならず者 ビリー・ザ・キッド","2895_1746_-1_1_1_1_0_0_0_2095_0_1"],
["－－水属性－－","2"],
["☆5 崩壊体ソウマ","072_1210_4_2_1_2_5_0_0_0_0_2"],
["☆5 ハリウッドスター マサヒト","095_1187_4_1_1_2_0_0_0_0_0_2"],
["☆5 ロックレジェンド トモヤ","259_1321_4_1_1_2_0_1_0_0_0_2"],
["☆6 若き天才剣士 沖田総司","265_1652_5_1_1_2_5_1_0_1982_0_2"],
["☆6 天上の旋律 ミヤビ","353_1432_9_1_1_2_5_1_5_1718_0_2"],
["☆5 三ツ星シェフ タツヤ","365_1052_4_1_1_2_0_0_0_0_0_2"],
["☆5 天才コピー忍者 カカシ","389_1302_7_1_1_2_5_1_0_0_0_2"],
["☆5 雪だるま職人 カズヤ","487_1215_4_2_1_2_0_0_0_0_0_2"],
["☆5 ゴキゲンなブルース","505_885_4_1_1_2_0_0_0_0_0_2"],
["☆6 皆伝の女気功師 ルウ","533_1722_4_1_0.25_2_5_0_0_2066_0_2"],
["☆5 神弦 マリエ","539_1218_4_1_1_2_5_0_0_0_0_2"],
["☆5 カジノ界の帝王 タツミ","639_1289_4_2_1_2_5_0_0_0_0_2"],
["☆5 第一型ランスロット","667_1215_5_1_1_2_5_0_0_0_0_2"],
["☆6 聖龍王メギドラ","755_1703_5_1_1_2_0_0_0_2043_0_2"],
["☆6 ネバーランド ウェンディ","924_1696_5_1_1_2_5_0_0_2035_0_2"],
["☆6 ロイヤルガード スペード","932_1677_1_1_1_2_0_0_0_0_30%_2"],
["☆6 鍛えぬかれた戦士 ミカサ","946_1593_5_1_1_2_0_0_0_1911_0_2"],
["☆6 ジ・エンターテイナー ダン","955_1419_6_1_1_2_0_1_0_0_0_2"],
["☆6 蛇神に選ばれし乙女 キヨ","965_1704_5_1_1_2_5_0_0_2044_0_2"],
["☆5 常夏海ガール ミライ","988_1331_4_1_1_2_0_1_0_0_0_2"],
["☆6 氷竜を操りし者 日番谷","1032_1651_4_1_1_2_0_0_0_1981_0_2"],
["☆5 朽木家の女死神 ルキア","1034_1201_4_1_1_2_0_0_0_0_0_2"],
["☆5 若き天才梨汁 おきっしー","1093_1312_5_1_1_2_5_1_0_0_0_2"],
["☆6 麗王妃 マリーアントワネット","1119_1709_5_1_1_2_5_0_0_2050_0_2"],
["☆6 闇夜の吸血鬼 ミヤビ","1147_1432_6_1_1_2_1_0_0_1718_0_2"],
["☆5 心奪われし屍者 サヤ","1165_1214_6_1_1_2_5_0_0_0_0_2"],
["☆5 警備の妖精 ルセーブ","1192_1224_4_1_1_2_5_0_0_0_0_2"],
["☆5 力強いリズム 佐藤栄太郎","1210_1216_4_1_1_2_0_0_0_0_0_2"],
["☆6 聖夜の貴公子 ナナセ","1229_1703_5_1_1_2_5_0_0_2043_0_2"],
["☆5 聖夜のアーティスト ミオ","1235_1335_4_1_1_2_0_0_0_0_0_2"],
["☆6 氷結の女気功師 ルウ","1292_1722_4_1_0.25_2_5_0_0_2066_0_2"],
["☆6 開眼の女気功師 ルウ","1293_1722_4_1_0.25_2_5_0_0_2066_0_5"],
["☆6 水龍の女気功師 ルウ","1309_1722_5_1_1_2_5_0_0_2066_0_2"],
["☆5 豊穣の宝船 シュンサク","1317_1281_4_1_1_2_0_0_0_0_0_2"],
["☆6 神出鬼没の大泥棒 ルパン三世","1347_1712_1_1_1_2_0_0_0_0_25%_2"],
["☆6 水霧のリトルミル","1369_1712_4_1_1_2_0_0_0_2054_0_2"],
["☆6 群青のリトルミル","1370_1712_4_2.5_1_2_0_0_0_2054_0_2"],
["☆6 氷炎のリトルミル","1371_1712_4_1_1_2_0_0_0_2054_0_1"],
["☆5 アイステノール カイト","1394_1291_5_1_1_2_5_0_0_0_0_2"],
["☆5 夢の続き 雪ミク","1398_1329_4_2_1_2_0_0_0_0_0_2"],
["☆5 チョコレートドレス トモカ","1421_1381_4_1_1_2_5_0_0_0_0_2"],
["☆6 昇竜を現す神筆 ミライ","1441_1512_4_1_1_2_0_0_0_0_0_2"],
["☆5 純真なるラジコン少年 トウヤ","1460_1321_4_1_0.5_2_0_0_0_0_0_2"],
["☆6 氷晶の操り手 キヨ","1480_1704_5_1_1_2_5_0_0_2044_0_2"],
["☆6 氷夜の支配者 キヨ","1481_1704_5_1_1_2_5_0_0_2044_0_5"],
["☆5 連合切込隊長 アイト","1501_1398_4_1_1_2_5_0_0_0_0_2"],
["☆6 屈強な義体の戦士 バトー","1518_1603_6_1_1_2_0_0_0_0_0_2"],
["☆6 明鏡止水の境地 ユウ","1532_1890_5_1_1_2_0_0_0_2268_0_2"],
["☆5 ミリオンエッグ レミ","1577_1348_4_1_1_2_0_0_0_0_0_2"],
["☆6 氷華繚乱 沖田総司","1597_1704_5_1_1_2_5_0_0_2044_0_2"],
["☆5 斬魔ハヤブサ","1645_1222_4_1_1_2_0_0_0_0_0_2"],
["☆6 キョダイネコ","1664_1401_1_1_1_2_0_0_0_0_200000_2"],
["☆5 狂乱の水の三つ子ニャンゼル","1671_1_4_1_1_2_0_0_0_0_0_2"],
["☆6 氷の造形魔導士 グレイ","1694_1689_5_1_1_2_0_0_0_2026_0_2"],
["☆5 グレイ様ひとすじ ジュビア","1698_1172_4_1_1_2_0_0_0_0_0_2"],
["☆6 果たせぬ想いの果て キリカ","1751_1704_12_1_1_2_0_0_0_2044_0_2"],
["☆6 プロアングラー ミワコ","1753_1627_5_1_1_2_0_0_0_1952_0_2"],
["☆5 フライボーダー アユ","1777_1251_4_1_1_2_0_0_0_0_0_2"],
["☆6 二代目火影 扉間","1800_1744_5_1_1_2_0_0_0_0_0_2"],
["☆6 ゴジラ＆第4使徒","1886_1711_6_1_1_2_0_0_0_2053_0_2"],
["☆6 むてきの功夫少女 メイリャン","1901_1701_5_1_1_2_0_0_0_2041_0_2"],
["☆6 ケルピーの激昂 シュウゴ","1907_1799_5_1_1_2_0_0_0_2158_0_2"],
["☆6 闘争を封ぜし海竜 クズキ","1919_1695_1_1_1_2_5_0_0_0_20%_2"],
["☆6 万象統ぐ緋眸 アインレーラ","2131_1714_4_1_1_2_0_0_0_2056_0_2"],
["☆5 打振の氷子女 スノー","2151_1278_4_1_1_2_0_0_0_0_0_2"],
["☆6 幻想を打ち砕くもの 上条当麻","2228_1686_5_1_1_2_0_0_0_2023_0_2"],
["☆5 本命からの贈り物 トモヤ","2290_1392_4_1_1_2_0_0_0_0_0_2"],
["☆6 艶麗妃 マリーアントワネット","2305_1709_5_1_1_2_5_0_0_2050_0_2"],
["☆6 典麗妃 マリーアントワネット","2306_1709_5_1_1_2_5_0_0_2050_0_3"],
["☆4 水菜","2398_476_1_1_1_2_0_0_0_0_1%_2"],
["☆5 イースターのしらべ マリエ","2413_1382_4_1_1_2_0_0_0_0_0_2"],
["☆6 皇帝の卵を抱く乙女 キヨ","2422_1727_5_1_1_2_0_0_0_2072_0_2"],
["☆6 銀河戦士コスモ","2460_1632_5_2_1_2_0_0_0_0_0_2"],
["☆5 スマートなケーキ入刀 アイト","2492_1299_4_1_1_2_0_0_0_0_0_2"],
["☆6 涙の池に沈んで アリス","2507_1719_5_1_1_2_0_0_0_2062_0_2"],
["☆6 狼の出る森 赤ずきん","2508_1719_5_1_1_2_0_0_0_2062_0_1"],
["☆6 夢世界からの覚醒 アリス","2510_1719_5_1_1_2_0_0_0_2062_0_4"],
["☆6 塔の上の姫君 ラプンツェル","2511_1719_5_1_1_2_0_0_0_2062_0_5"],
["☆6 選ばれし神筆 ミライ","2524_1512_4_1_1_2_0_0_0_0_0_2"],
["☆6 唯一無双の女気功師 ルウ","2525_1722_4_1_0.25_2_5_0_0_2066_0_2"],
["☆6 唯一無双の女気功師 ルウ・蒼","2526_1722_4_1_0.25_2_5_0_0_2066_0_2"],
["☆6 唯一無双の女気功師 ルウ・冥","2527_1722_4_1_0.25_2_5_0_0_2066_0_5"],
["☆6 青くきらめくひと夏 ルウ","2544_1752_5_1_1_2_0_0_0_2102_0_2"],
["☆6 流せぬ報復の一念 キリカ","2584_1704_12_1_1_2_0_0_0_2044_0_2"],
["☆6 行き場を失った激情 キリカ","2585_1704_-1_1_1_2_0_0_0_2044_0_1"],
["☆6 未来からの狙撃手 F.R.O.G","2634_1721_8_1_1_2_0_0_0_2065_0_2"],
["☆6 豪腕の錬金術師 アレックス","2681_1655_-1_1_1_2_0_0_0_1986_0_2"],
["☆6 悠々のホルン奏者 シズマ","2710_1730_-1_1_1_2_0_0_0_2076_0_2"],
["☆5 空に響き渡るフルート ミナコ","2724_1243_-1_1_1_2_0_0_0_0_0_2"],
["☆6 鏡花水月の境地 ミライ","2754_1594_5_1_1_2_0_0_0_0_0_2"],
["☆6 百花繚乱 舞い踊る筆 ミライ","2755_1594_10_1_1_2_0_0_0_0_0_2"],
["☆5 正月舞台挨拶 マサヒト","2785_1354_7_1_1_2_0_0_0_0_0_2"],
["☆6 目醒め前の少年 ツバサ","2803_1726_10_1_1_2_0_0_0_2071_0_2"],
["☆6 御庭番衆御頭 四乃森蒼紫","2829_1648_-1_1_1_2_0_0_0_1977_0_2"],
["☆5 京都御庭番 巻町操","2835_1382_-1_1_1_2_0_0_0_0_0_2"],
["☆6 新たな扉を開けて アイリ","2848_1706_-1_1_1_2_0_0_0_2047_0_2"],
["☆6 青雲秋月の境地 ユウ","2856_1890_5_1_1_2_0_0_0_2268_0_2"],
["☆6 清風明月の境地 ユウ","2857_1890_5_1_1_2_0_0_0_2268_0_3"],
["☆6 歩き出す卵たち セイナ","2875_1706_5_1_1_2_0_0_0_2047_0_2"],
["☆6 守護者（水）","9989_2000_5_1_1_2_0_0_0_0_0_2"],
["－－木属性－－","3"],
["☆5 00セクション アナ","099_1175_4_1_1_3_0_0_0_0_0_3"],
["☆6 戦場の女神 ジャンヌダルク","267_1502_5_1_1_3_5_1_0_1802_0_3"],
["☆5 オリーブオイルの魔術師 モコ","368_953_4_1_1_3_0_0_0_0_0_3"],
["☆5 グロッキーなキングピッグ","511_1015_4_1_1_3_0_0_0_0_0_3"],
["☆5 アーチェリークイーン ナミコ","632_1269_4_1_1_3_5_1_0_0_0_3"],
["☆6 慈愛のお花屋さん アヤノ","745_1651_5_1_1_3_5_0_0_1981_0_3"],
["☆5 鬼神にゃんま","767_1155_6_1_1_3_0_0_0_0_0_3"],
["☆5 タマとウルルン","792_1303_4_2_1_3_0_0_0_0_0_3"],
["☆5 若者たちの先導者 アミ","880_1345_4_1_1_3_10_1_0_0_0_3"],
["☆6 狂宴の主催者 マッドハッター","934_1587_1_1_1_3_0_0_0_0_30%_3"],
["☆6 人類最強の兵士 リヴァイ","942_1671_4_2_1_3_0_0_0_2005_0_3"],
["☆6 必殺女子高生 チアキ","1000_1424_6_1_1_3_0_0_0_0_0_3"],
["☆6 十尾の人柱力 オビト","1007_1444_4_2_1_3_0_0_0_0_0_3"],
["☆5 木ノ葉の碧き猛獣 ガイ","1021_1180_4_1_0.5_3_5_1_0_0_0_3"],
["☆5 四番隊癒しの母 卯ノ花","1042_1204_4_1_1_3_0_0_0_0_0_3"],
["☆5 剣八の無邪気な相方 やちる","1056_1209_5_1_1_3_0_0_0_0_0_3"],
["☆5 戦場の梨神 じゃんぬっしー","1095_1232_5_1_1_3_5_1_0_0_0_3"],
["☆5 情熱の爆弾魔 リンコ","1113_1280_4_1_0.5_3_0_1_0_0_0_3"],
["☆6 鬼道を司る女王 卑弥呼","1121_1684_5_1_1_3_5_0_0_2020_0_3"],
["☆6 花に愛されし包帯女 サユリ","1151_1701_8_1_1_3_5_0_0_2041_0_3"],
["☆6 消滅の幻影師 ヨシアキ","1173_1403_4_1_1_3_5_1_0_0_0_3"],
["☆5 テクニカルベース 後鳥亮介","1208_1103_4_1_1_3_0_0_0_0_0_3"],
["☆6 必殺の花嫁 チアキ","1212_1702_5_1_1_3_0_0_0_2042_0_3"],
["☆6 恐怖の予言者 ノストラダムス","1225_1999_1_1_1_3_0_0_0_0_666666_3"],
["☆6 リースにこめた願い アヤノ","1227_1651_1_1_1_3_5_0_0_0_25%_3"],
["☆5 最高のクリスマスディナー モコ","1237_1284_4_1_1_3_0_0_0_0_0_3"],
["☆5 おひとりクリスマス ナツキ","1255_1224_4_2_1_3_0_0_0_0_0_3"],
["☆5 ダル・ザ・スーパーハッカー","1261_1340_4_1_1_3_0_0_0_0_0_3"],
["☆6 秘めたる花言葉 アヤノ","1294_1651_5_1_1_3_5_0_0_1981_0_3"],
["☆6 花々の輝き アヤノ","1295_1651_5_1_1_3_5_0_0_1981_0_4"],
["☆5 初夢の琴の音 モモコ","1319_1171_4_1_0.5_3_0_0_0_0_0_3"],
["☆5 はつらつ祈祷師 チホ","1323_1211_4_1_1_3_0_0_0_0_0_3"],
["☆5 居合の達人 石川五ェ門","1353_1321_5_1_0.5_3_0_0_0_0_0_3"],
["☆5 忠誠を捧ぐ者 ロブソン","1359_1320_5_1_1_3_0_0_0_0_0_3"],
["☆6 若緑のポート・エレン","1373_1665_1_1_1_3_0_0_0_0_25%_3"],
["☆6 常盤のポート・エレン","1374_1665_5_2.5_1_3_0_0_0_1998_0_3"],
["☆6 暗緑のポート・エレン","1375_1665_5_1_1_3_0_0_0_1998_0_5"],
["☆6 みんなの歌姫 初音ミク","1385_1719_5_1_1_3_5_0_0_2062_0_3"],
["☆6 エレクトロディーヴァ 初音ミク","1386_1719_5_1_1_3_5_0_0_2062_0_3"],
["☆6 エレクトロエンジェル 初音ミク","1387_1719_5_1_1_3_5_0_0_2062_0_4"],
["☆6 エレクトロデビル 初音ミク","1388_1719_5_1_1_3_5_0_0_2062_0_5"],
["☆6 ハートフルキューピッド サトミ","1407_1691_4_1_1_3_5_0_0_2029_0_3"],
["☆6 幼き死神 スズメバチ","1487_1719_5_1_1_3_5_0_0_2062_0_3"],
["☆5 連合突撃隊長 グンタ","1493_1398_4_1_1_3_5_0_0_0_0_3"],
["☆6 惑わぬ視線 マキノ","1534_1860_5_2_1_3_0_0_0_2232_0_3"],
["☆6 イースターの奇術師 ヨシアキ","1565_1781_12_1_1_3_0_0_0_2137_0_3"],
["☆5 エッグボマー リンコ","1579_1392_7_1_1_3_0_0_0_0_0_3"],
["☆5 それゆけぴよガール ヒヨコ","1587_1340_4_1_1_3_0_0_0_0_0_3"],
["☆5 パーティの破壊者 チアキ","1625_1359_6_1_1_3_5_0_0_0_0_3"],
["☆6 地蔵要塞カムイ","1631_1712_5_1_0.5_3_0_0_0_0_0_3"],
["☆5 ネコぺろきゃん","1647_1291_4_1_1_3_0_0_0_0_0_3"],
["☆5 武神・前田慶次","1651_1288_4_1_1_3_0_0_0_0_0_3"],
["☆5 狂乱の木の三つ子ニャンゼル","1672_1_4_1_1_3_0_0_0_0_0_3"],
["☆6 妖精女王 エルザ","1696_1755_5_1_1_3_0_0_0_2106_0_3"],
["☆5 天空の滅竜魔導士 ウェンディ","1700_1303_4_1_1_3_0_0_0_0_0_3"],
["☆5 なりきり新郎 スズメバチ","1727_1374_6_1_1_3_0_0_0_0_0_3"],
["☆6 バーチャルリゾート カナ","1767_1764_5_1_1_3_0_0_0_2116_0_3"],
["☆5 処刑人の素顔 ユナ","2121_1359_4_1_1_3_0_0_0_0_0_3"],
["☆6 勇鼓す戦神 ユーヴェンス","2133_1675_5_1_1_3_0_0_0_2010_0_3"],
["☆5 疾風の拳士 ティタン","2155_1256_4_1_1_3_0_0_0_0_0_3"],
["☆5 紀記の老騎士 フェルゼン","2161_1352_4_1_0.5_3_0_0_0_0_0_3"],
["☆6 超越体 ソル","2194_1592_1_1_1_3_5_0_0_0_20%_3"],
["☆5 聖夜に舞う妖精 ミナミ","2223_1316_1_1_1_3_0_0_0_0_100000_3"],
["☆5 設計通りの恋 ケンゴ","2292_1356_4_1_1_3_0_0_0_0_0_3"],
["☆6 再臨の皇祖神 卑弥呼","2307_1684_5_1_1_3_5_0_0_2020_0_3"],
["☆6 天より照らす威光 卑弥呼","2308_1684_5_1_1_3_5_0_0_2020_0_1"],
["☆6 撃鉄の意思 リサーチャー","2336_1722_5_1_1_3_0_0_0_2066_0_3"],
["☆5 悪魔祓いの司教 ユウタ","2353_1297_5_1_1_3_0_0_0_0_0_3"],
["☆5 天穹羨望 ディーヴァ","2373_1368_4_1_1_3_0_0_0_0_0_3"],
["☆3 長芋","2402_401_1_1_1_3_0_0_0_0_1%_3"],
["☆5 イースターガーデナー テッペイ","2415_1352_4_1_1_3_0_0_0_0_0_3"],
["☆6 翼の解放 一方通行＆打ち止め","2446_1766_5_1_1_3_0_0_0_0_0_3"],
["☆6 祝福の大砲 グンタ","2494_1593_5_1_1_3_0_0_0_0_0_3"],
["☆6 不敵なる気鋭探偵 トモコ","2533_1719_-1_1_1_3_0_0_0_2062_0_3"],
["☆6 絶体絶命女子高生 チアキ","2579_1601_4_1_1_3_0_0_0_0_0_3"],
["☆6 戦慄の殺し屋 チアキ","2580_1601_10_1_1_3_0_0_0_0_0_3"],
["☆6 新しい物語 ピーターパン","2581_1489_4_1_1_3_0_1_0_0_0_3"],
["☆6 未来からの契約者 ユウト","2635_1752_8_1_1_3_0_0_0_0_0_3"],
["☆5 デジタルパレード カナ","2650_1386_7_1_1_3_0_0_0_0_0_3"],
["☆5 熟練のサックス奏者 トモコ","2730_1321_-1_1_1_3_0_0_0_0_0_3"],
["☆6 戦場を駆ける守護者 リョウコ","2752_1723_-1_1_1_3_0_0_0_2067_0_3"],
["☆6 新たに宿す強き意思 リョウコ","2753_1723_-1_1_1_3_0_0_0_2067_0_3"],
["☆5 弾けるパーティナイト リンコ","2761_1381_-1_1_1_3_0_0_0_0_0_3"],
["☆5 熟練解錠者への道 コウジ","2807_1399_7_1_1_3_0_0_0_0_0_3"],
["☆5 盲剣 魚沼宇水","2841_1331_-1_1_1_3_0_0_0_0_0_3"],
["☆6 重ねた努力が芽吹く時 マキノ","2858_1860_5_2_1_3_0_0_0_2232_0_3"],
["☆6 迷わぬ夢の通り道 マキノ","2859_1860_5_2_1_3_0_0_0_2232_0_2"],
["☆6 守護者（木）","9988_2000_5_1_1_3_0_0_0_0_0_3"],
["－－光属性－－","4"],
["☆6 超存在 ツキ","103_1452_1_1_1_4_0_0_0_0_30%_4"],
["☆6 万能の天才 ダヴィンチ","269_1735_5_1_1_4_5_1_0_2082_0_4"],
["☆5 クリームの魔術師 ペコ","371_1089_4_1_1_4_0_0_0_0_0_4"],
["☆6 四代目火影を超える忍 ナルト","384_1523_6_1_1_4_5_1_0_1827_0_4"],
["☆5 ゴキゲンなチャック","507_1001_4_1_1_4_0_0_0_0_0_4"],
["☆5 コンシェルジュ","547_1201_4_1_1_4_0_0_0_0_0_4"],
["☆6 虚構の文豪 アキヒコ","565_1432_6_1_1_4_0_1_0_0_0_4"],
["☆6 覚醒型シシララOD","663_1507_6_1_1_4_5_0_0_1808_0_4"],
["☆5 支援型メルト","675_1244_4_1_0.5_4_5_0_0_0_0_4"],
["☆5 差し伸べる手 ユウスケ","737_1303_4_1_0.5_4_0_1_0_0_0_4"],
["☆5 竜騎士王バルス","759_1217_5_1_1_4_0_0_0_0_0_4"],
["☆5 狂乱の光の三つ子ニャンゼル","816_1_4_1_1_4_0_0_0_0_0_4"],
["☆6 正義の襲撃者 アヤメ","876_1520_4_2_1_4_2_0_0_1824_0_4"],
["☆6 夢叶えた新郎 サトル","894_1545_5_1_1_4_0_0_0_1854_0_4"],
["☆5 不死鳥を敬服せし召喚士","912_1280_5_1_1_4_0_0_0_0_0_4"],
["☆6 永遠の夢の少女 アリス","920_1511_5_1_1_4_5_0_0_1813_0_4"],
["☆5 頭脳冴え渡る兵士 アルミン","948_1243_4_1_1_4_0_0_0_0_0_4"],
["☆4 リヴァイ（お掃除版）","949_1111_4_1_1_4_0_0_0_0_0_4"],
["☆6 狐神に選ばれし娘 サヨ","969_1507_8_1_1_4_5_0_0_1808_0_4"],
["☆5 水平線の向こうへ マミ","982_1343_4_1_1_4_0_1_0_0_0_4"],
["☆5 八尾の人柱力 ビー","1019_1305_5_1_1_4_5_1_0_0_0_4"],
["☆5 滅却師 雨竜","1040_1186_4_1_1_4_0_0_0_0_0_4"],
["☆5 優美なる宝石商 アキナ","1085_1261_4_1_1_4_0_1_0_0_0_4"],
["☆5 万梨の天才 だびっしー","1099_1354_5_1_1_4_5_1_0_0_0_4"],
["☆6 必殺の狙撃手 ミイ","1109_1478_5_1_1_4_5_0_0_1773_0_4"],
["☆5 お菓子な魔法使い ペコ","1159_1335_4_1_1_4_5_0_0_0_0_4"],
["☆5 真夜中の脱獄囚 シュウヤ","1167_1215_4_1_1_4_5_0_0_0_0_4"],
["☆5 聖騎型ローエングリン","1184_1201_5_1_1_4_5_0_0_0_0_4"],
["☆5 甘いギター 長田カーティス","1206_1136_4_1_1_4_0_0_0_0_0_4"],
["☆6 約束のアンドロイド マコ・改","1219_1492_1_1_1_4_5_0_0_0_200000_4"],
["☆6 執念の観測者 岡部倫太郎","1257_1543_5_1_1_4_0_0_0_1851_0_4"],
["☆6 天使を宿す少年 スグル","1282_1651_5_1_1_4_0_0_0_1981_0_4"],
["☆6 終わらない夢物語 アリス","1296_1511_5_1_1_4_5_0_0_1813_0_4"],
["☆6 キラめく夢の中 アリス","1297_1511_5_1_1_4_5_0_0_1813_0_1"],
["☆6 欲望に忠実な女 峰不二子","1349_1687_5_1_1_4_0_0_0_0_0_4"],
["☆6 光刃のガーヴァン","1377_1611_5_1_1_4_0_0_0_1933_0_4"],
["☆6 雷刃のガーヴァン","1378_1611_5_2.5_1_4_0_0_0_1933_0_4"],
["☆6 緑光のガーヴァン","1379_1611_5_1_1_4_0_0_0_1933_0_3"],
["☆6 ユニゾンツインズ 鏡音リン・レン","1390_1601_4_1_1_4_5_0_0_1921_0_4"],
["☆6 トップランカー セツナ","1401_1638_4_1_1_4_0_0_0_1965_0_4"],
["☆5 なりきり勇者 チカ","1403_1250_4_1_1_4_0_1_0_0_0_4"],
["☆6 終末の誓約者 ミア","1438_1498_1_1_1_4_5_0_0_0_1500000_4"],
["☆5 世界を救うゴッドハンド クロウ","1464_1398_4_1_1_4_0_0_0_0_0_4"],
["☆6 奇跡の出会い ハヅキ","1485_1705_1_1_1_4_5_0_0_0_25%_4"],
["☆5 ひっちゅーの狙撃手 ユイ","1507_1378_4_2_1_4_5_0_0_0_0_4"],
["☆6 すべてを曲げる者 ヤヨイ","1537_1502_4_1_1_4_5_1_0_0_0_4"],
["☆6 ハッピーイースター アリス","1567_1662_5_1_1_4_0_0_0_1994_0_4"],
["☆5 夢見る姉妹のイースター ミサ","1581_1398_4_1_1_4_0_0_0_0_0_4"],
["☆5 イースターに願う夢 ユミ","1583_1204_4_1_1_4_0_0_0_0_0_4"],
["☆5 ぐにゃぐにゃパーティ ヤヨイ","1605_1284_4_1_1_4_5_0_0_0_0_4"],
["☆6 ハートフルねこナース","1629_1735_5_1_1_4_0_0_0_2082_0_4"],
["☆5 爆走兄弟ピーチスター","1655_1243_4_1_0.5_4_0_0_0_0_0_4"],
["☆5 光の滅竜魔導士 スティング","1706_1294_4_1_1_4_0_0_0_0_0_4"],
["☆5 漆黒の王 レオ","1710_1205_4_2_1_4_0_0_0_0_0_4"],
["☆6 突撃！サイキッカー ヤヨイ","1763_1720_4_1_1_4_0_0_0_2064_0_4"],
["☆6 想いの救世主 ノゾム","1825_1713_12_1_1_4_0_0_0_2055_0_4"],
["☆6 正義の執行者 アヤメ","1881_1520_4_2_1_4_2_0_0_1824_0_4"],
["☆6 みんなの味方 アヤメ","1882_1520_4_2_1_4_2_0_0_1824_0_2"],
["☆6 サイエンスウィッチ マミ","2101_1765_5_1_1_4_0_0_0_2118_0_4"],
["☆5 希代の詭弁魔法使い マサムネ","2123_1313_4_1_1_4_0_0_0_0_0_4"],
["☆6 覆世の白夜 フランシール","2135_1741_5_1_1_4_0_0_0_2089_0_4"],
["☆5 薄黄羽の児戯 ユーリ","2165_1319_4_1_1_4_0_0_0_0_0_4"],
["☆5 金尾の風来人 セシリア","2167_1258_4_1_0.5_4_0_0_0_0_0_4"],
["☆6 崩壊体 ギンガ","2196_1603_1_1_1_4_0_0_0_0_20%_4"],
["☆5 大吉福袋の祝福 ミサコ","2252_1345_5_1_1_4_0_0_0_0_0_4"],
["☆5 伝統遊戯の継承者 ゲン","2254_1339_1_1_1_4_0_0_0_0_0_4"],
["☆5 王位型コンスタンティン","2369_1349_4_1_1_4_0_0_0_0_0_4"],
["☆6 そこに在る奇跡 ハヅキ","2423_1705_1_1_1_4_5_0_0_0_25%_4"],
["☆6 栄光ある女王 エリザベス","2478_1765_5_1_1_4_0_0_0_0_0_4"],
["☆5 海辺のお菓子売り ペコ","2564_1376_4_1.7_1_4_0_0_0_0_0_4"],
["☆6 救世済民の祖師 ノゾム","2582_1713_12_1_1_4_0_0_0_2055_0_4"],
["☆6 堕天の救世者 ノゾム","2583_1713_-1_1_1_4_0_0_0_2055_0_5"],
["☆6 未来からのスシヒロイン エル","2636_1728_8_1_1_4_0_0_0_0_0_4"],
["☆6 鋼の錬金術師 エドワード","2674_1743_5_1_1_4_0_0_0_2091_0_4"],
["☆5 錬丹術師 メイ＆シャオメイ","2687_138_-1_1_1_4_0_0_0_0_0_4"],
["☆6 堕天使を統べる少年 スグル","2772_1651_5_1_1_4_0_0_0_1981_0_5"],
["☆6 お茶会でお披露目 サヨ","2818_1672_-1_1_1_4_0_0_0_2006_0_4"],
["☆6 不殺の流浪人 緋村剣心","2826_1741_6_1_1_4_0_0_0_0_0_4"],
["☆6 守護者（光2）","9987_2000_5_1_1_4_0_0_0_0_0_4"],
["－－闇属性－－","5"],
["☆6 超存在 タイヨウ","107_1708_1_1_1_5_0_0_0_0_35%_5"],
["☆6 ナイルの女帝 クレオパトラ","271_1798_5_1_1_5_5_1_0_2157_0_5"],
["☆5 和食の鉄人 サブロウ","374_1035_4_1_1_5_0_0_0_0_0_5"],
["☆6 開眼の闇気功師 ロウ","376_1782_5_1_1_5_5_0_0_2138_0_5"],
["☆6 万華鏡を開眼せし者 サスケ","387_1496_4_2_1_5_0_0_0_0_0_5"],
["☆5 ゴキゲンなボム","509_925_4_1_1_5_0_0_0_0_0_5"],
["☆5 モンスターティーチャー タカオ","541_1251_4_1_1_5_0_0_0_0_0_5"],
["☆6 完全体アンドロイド イコ・改","593_1403_6_1_1_5_0_1_0_0_0_5"],
["☆6 侵食型モードレッド","692_1491_6_1_1_5_0_0_0_0_0_5"],
["☆5 優良メカニック ハヤト","739_1320_4_1_0.5_5_5_1_0_0_0_5"],
["☆6 ネコハッカー","775_1731_5_1_0.5_5_0_0_0_2077_0_5"],
["☆5 孤独の大怪盗 ツバサ","878_1374_4_1_1_5_10_1_0_0_0_5"],
["☆6 竜神の力を宿す竜騎士","904_1660_5_1_1_5_0_0_0_1992_0_5"],
["☆6 ジェノサイドプリンセス スミレ","916_1544_4_1_1_5_5_1_0_0_0_5"],
["☆6 夢幻の少女 アリス","922_1744_4_1_1_5_5_0_0_2092_0_5"],
["☆6 蜘蛛神の化身 ユラ","971_1799_5_1_1_5_5_0_0_2158_0_5"],
["☆6 プカプカ殺人姫 スミレ","978_1790_4_2_1_5_0_0_0_2148_0_5"],
["☆5 南国のトリックスター ルイ","990_1371_4_1_1_5_0_0_0_0_0_5"],
["☆6 斬月の戦友 一護","1030_1550_6_1_1_5_0_0_0_1860_0_5"],
["☆5 巨人を宿した右腕 チャド","1048_1125_7_1_1_5_0_0_0_0_0_5"],
["☆5 奇襲の神鎗 ギン","1067_1170_4_1_1_5_0_0_0_0_0_5"],
["☆5 フナバシの梨帝 ぱとらっしー","1097_1364_5_1_1_5_5_1_0_0_0_5"],
["☆6 第六天魔王 織田信長","1125_1563_5_2_1_5_5_0_0_1875_0_5"],
["☆6 共鳴型シシララPS","1182_1719_5_1_1_5_5_0_0_2062_0_5"],
["☆6 共感の歌声 川谷絵音","1204_1420_4_1_1_5_0_0_0_0_0_5"],
["☆6 死神を降ろした少女 サユ","1284_1783_5_1_1_5_0_0_0_2139_0_5"],
["☆6 深淵の闇気功師 ロウ","1288_1782_5_1_1_5_5_0_0_2138_0_5"],
["☆6 翠玉の闇気功師 ロウ","1289_1782_5_1_1_5_5_0_0_2138_0_3"],
["☆6 暗黒の予言者 ノストラダムス","1307_1999_1_1_1_5_0_0_0_0_666666_5"],
["☆6 紫電清霜の流鏑馬 カオル","1311_1682_8_1_1_5_5_0_0_2018_0_5"],
["☆5 大猿を司る陰陽師 ハルアキ","1327_1236_4_1_1_5_0_0_0_0_0_5"],
["☆5 本気の羽根つき アンコ","1337_1229_4_1_1_5_0_0_0_0_0_5"],
["☆5 超一流のガンマン 次元大介","1351_1351_6_1_1_5_0_0_0_0_0_5"],
["☆6 星夜のローズバンク","1381_1716_1_1_1_5_0_0_0_0_25%_5"],
["☆6 夜想のローズバンク","1382_1716_5_2.5_1_5_0_0_0_2059_0_5"],
["☆6 蒼夜のローズバンク","1383_1716_1_1_1_5_0_0_0_0_25%_2"],
["☆6 ショコラプリンセス スミレ","1405_1790_5_1_1_5_5_0_0_2148_0_5"],
["☆5 君と素敵な一夜を トシヤ","1423_1401_4_1_1_5_5_0_0_0_0_5"],
["☆6 終焉の契約者 シンヤ","1436_1630_1_1_1_5_5_0_0_0_999999_5"],
["☆6 世界を修正する者 アキラ","1456_1687_12_1_1_5_2_0_0_2024_0_5"],
["☆5 ラップ界のレジェンド チハル","1462_1341_4_1_1_5_0_0_0_0_0_5"],
["☆5 必殺の壺振り シマ","1499_1378_7_1_1_5_5_0_0_0_0_5"],
["☆5 宇宙に夢を馳せる者 イッセイ","1509_1331_4_1_1_5_5_0_0_0_0_5"],
["☆5 ラビットトリックスター ルイ","1575_1377_4_1_1_5_0_0_0_0_0_5"],
["☆5 がんばりペインター ネネ","1585_1319_4_1_1_5_0_0_0_0_0_5"],
["☆6 ゴシックプリンセス スミレ","1601_1749_5_1_1_5_5_0_0_2098_0_5"],
["☆5 闇商人バビル","1663_1299_6_1_1_5_0_0_0_0_0_5"],
["☆5 狂乱の闇の三つ子ニャンゼル","1673_1_4_1_1_5_0_0_0_0_0_5"],
["☆5 魔人 ミラジェーン","1704_1271_4_1_1_5_0_0_0_0_0_5"],
["☆5 影の滅竜魔導士 ローグ","1708_1312_4_1_1_5_0_0_0_0_0_5"],
["☆6 未来へ手をのばして ユヅキ","1723_1707_5_1_1_5_0_0_0_2053_0_5"],
["☆5 ブライドメイク サトコ","1747_1203_4_1_1_5_0_0_0_0_0_5"],
["☆6 蘇りし絆 イタチ＆サスケ","1796_1759_5_2.5_1_5_0_0_0_2110_0_5"],
["☆6 結実の旋律 アマネ","1868_1779_5_1_1_5_0_0_0_2134_0_5"],
["☆6 シンジ＆カヲル＆第13号機＆OD","1884_1738_5_1_1_5_0_0_0_0_0_5"],
["☆6 終焉の力 タイヨウ","1986_1622_1_1_1_5_0_0_0_0_20%_5"],
["☆6 トリック・オア・パレード ルイ","2103_1764_5_1_1_5_0_0_0_2116_0_5"],
["☆5 妖艶吸血鬼 マユカ","2125_1362_4_1_1_5_0_0_0_0_0_5"],
["☆5 疾黒迅斬の侍 くろう","2171_1359_4_1_1_5_0_0_0_0_0_5"],
["☆5 双紫剣の舞手 ランファ","2175_1300_4_1_0.5_5_0_0_0_0_0_5"],
["☆5 幸せな街の中で シンノスケ","2215_1376_4_1_1_5_0_0_0_0_0_5"],
["☆6 最強の能力者 アクセラレータ","2230_1743_5_1_1_5_0_0_0_2091_0_5"],
["☆6 伏魔殿の絶対君主 織田信長","2311_1563_5_2_1_5_5_0_0_1875_0_5"],
["☆6 十界の聖君主 織田信長","2312_1563_5_2_1_5_5_0_0_1875_0_4"],
["☆6 破滅をもたらす一撃 ユイ","2339_1711_1_1_1_5_0_0_0_0_500000_5"],
["☆6 乙恋型フィリシャ","2363_1735_5_1_1_5_0_0_0_0_0_5"],
["☆5 結髪型ペルシャ","2375_1397_4_1_1_5_0_0_0_0_0_5"],
["☆5 卵争奪マッチ デストロイ","2417_1392_4_1_1_5_0_0_0_0_0_5"],
["☆5 大精霊チラメイド 五和","2452_1381_4_1_1_5_0_0_0_0_0_5"],
["☆5 厳然たる生徒会長 カズマ","2541_1392_4_1.7_1_5_0_0_0_0_0_5"],
["☆6 海を割る一撃 ロウ","2550_1711_5_1_1_5_0_0_0_2053_0_5"],
["☆6 未来からの先導者 レイナ","2637_1701_8_1_1_5_0_0_0_2041_0_5"],
["☆6 囚われの黒姫 スミレ","2640_1603_-1_1_1_5_0_0_0_0_0_5"],
["☆6 月下二瞬ク黒キ蝶 スミレ","2641_1603_-1_1_1_5_0_0_0_0_0_5"],
["☆5 ”強欲”の皇子 リン","2691_1423_-1_1_1_5_0_0_0_0_0_5"],
["☆5 穏やかな聖夜パーティ トウヤ","2765_1338_-1_1_1_5_0_0_0_0_0_5"],
["☆5 楽しく過ごすお正月 ルイ","2787_1387_7_1_1_5_0_0_0_0_0_5"],
["☆6 歩みはじめた未来 ルイ","2809_1559_5_1_1_5_0_0_0_0_0_5"],
["☆6 煉獄の炎 志々雄真実","2844_1535_10_1_1_5_0_0_0_0_0_5"],
["☆6 守護者（闇）","9986_2000_5_1_1_5_0_0_0_0_0_5"],
["☆6 ”Ⅲ. The Empress” メシエ","2798_2102_15_1_1_1_0_0_0_0_0_1"],
["☆6 記念の福音と花束と スズナ","2898_1574_10_1_1_4_0_0_0_2041_0_4"]
];
