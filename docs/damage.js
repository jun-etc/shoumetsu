
	// 定数定義
	var PROP_TABLE = [
		["1", "1", "1", "1", "1", "1"],
		["1", "1", "0.5", "2", "1", "1"],
		["1", "2", "1", "0.5", "1", "1"],
		["1", "0.5", "2", "1", "1", "1"],
		["1", "1", "1", "1", "1", "2"],
		["1", "1", "1", "1", "2", "1"]
	];

	var MAX_CHAIN = 150;


	// NaN判定関数
	function isReallyNaN(x) {
		return x !== x;    // xがNaNであればtrue, それ以外ではfalse
	}


	// GETパラメタ取得関数
	var getUrlVars = function(){
		var vars = {}; 
		var param = location.search.substring(1).split('&');
		for (var i = 0; i < param.length; i++){
			var keySearch = param[i].search(/=/);
			var key = '';
			if (keySearch != -1) key = param[i].slice(0, keySearch);
			var val = param[i].slice(param[i].indexOf('=', 0) + 1);
			if (key != '') vars[key] = decodeURI(val);
		} 
		return vars;
	};

	function setGetParam(){
		var getVal = getUrlVars();
		if (getVal['guard']) document.damage.guard.value = getVal['guard'];
		if (getVal['result']) document.damage.result.value = getVal['result'];
		if (getVal['prop']){
			var propOpts = document.damage.prop.options;
			for (var i = 0; i < propOpts.length; i++){
				if (propOpts[i].value == getVal['prop']){
					propOpts[i].selected = true;
					break;
				}
			}
		}
	}


	// safari対応
	function getRadioButtonValue(r){
		for (var i = 0; i < r.length; i++){
			if (r[i].checked == true){
				return r[i].value;
			}
		}
	}

	function setRadioButtonValue(r, v){
		for (var i = 0; i < r.length; i++){
			if (r[i].value == v){
				r[i].checked = true;
				break;
			}
		}
	}


	// ミリ秒ウェイト
	function wait(milli){
		var time1 = new Date().getTime();
		var time2 = new Date().getTime();

		while ((time2 -  time1) < milli){
			time2 = new Date().getTime();
		}
	}


	// 限界突破攻撃力初期化
	function clearLimit(number){
		var dmg = document.damage;
		var limit = dmg.elements["limit" + number];

		while (limit.firstChild){
			limit.removeChild(limit.firstChild);
		}

		var option = document.createElement('option');
		option.setAttribute('value', 0);
		option.innerHTML = '無凸(Lv.99)';
		limit.appendChild(option);

		var limitOpts = limit.options;
		limitOpts[0].selected = true;
	}

	// 砲台選択
	var NUM_A_AMI = 1611;
	var SKL_A_AMI = -1;
	var NUM_MIU = 1681;
	var SKL_MIU = -2;
	var NUM_YUU = 1532;
	var NUM_AMANE = 1868;
	var SKL_5TO7 = -3;
	var NUM_H_MAMI = 2101;
	var SKL_H_MAMI = -4;
	var NUM_SAYU = 1284;

	function setCannonData(number){
		var dmg = document.damage;
		var cannon = dmg.elements["cannon" + number];
		var attack = dmg.elements["attack" + number];
		var attack_org = dmg.elements["attack_org" + number];
		var skill = dmg.elements["skill" + number];
		var up = dmg.elements["up" + number];
		var down = dmg.elements["down" + number];
		var attr = dmg.elements["attr" + number];
		var ability = dmg.elements["ability" + number];
		var _ability = document.getElementById("_ability" + number);
		var limit = dmg.elements["limit" + number];
		var tr_limit = document.getElementById("tr_limit" + number);

		var option;

		closeDetail(number);

		// 見出し行選択時
		if (cannon.value.length == 1){
			attack.value = '';
			var skillOpts = skill.options;
			skillOpts[0].selected = true;

			if (cannon.value == "0"){
				var upOpts = up.options;
				upOpts[0].selected = true;
				var downOpts = down.options;
				downOpts[0].selected = true;
			}

			// 属性相性自動変更
			var propCannon = parseInt(cannon.value);
			var propEnemy = parseInt(dmg.prop.value);
			setRadioButtonValue(attr, PROP_TABLE[propCannon][propEnemy]);

			attack_org.value = '';
			ability.style.display = "none";
			_ability.style.display = "inline";
			var ablOpts = ability.options;
			ablOpts[0].selected = true;

			clearLimit(number);
			tr_limit.style.display = "none";
		}
		else {
			var data = cannon.value.split('_');
			attack.value = data[1];

			var i;

			// IE対応 (何故かvalueに直接代入で動作しない。他の個所では動くのに…。)
			var skillOpts = skill.options;

			// アニバーサリーアミ対応
			if (data[0] == NUM_A_AMI){
				for (i = 0; i < skillOpts.length; i++){
					if (skillOpts[i].value == SKL_A_AMI){
						skillOpts[i].selected = true;
						break;
					}
				}
			}
			// ミウ対応
			else if (data[0] == NUM_MIU){
				for (i = 0; i < skillOpts.length; i++){
					if (skillOpts[i].value == SKL_MIU){
						skillOpts[i].selected = true;
						break;
					}
				}
			}
			// ユウ対応
			else if (data[0] == NUM_YUU){
				for (i = 0; i < skillOpts.length; i++){
					if (skillOpts[i].value == SKL_5TO7){
						skillOpts[i].selected = true;
						break;
					}
				}
			}
			// アマネ対応
			else if (data[0] == NUM_AMANE){
				for (i = 0; i < skillOpts.length; i++){
					if (skillOpts[i].value == SKL_5TO7){
						skillOpts[i].selected = true;
						break;
					}
				}
			}
			// ハロウィンマミ対応
			else if (data[0] == NUM_H_MAMI){
				for (i = 0; i < skillOpts.length; i++){
					if (skillOpts[i].value == SKL_H_MAMI){
						skillOpts[i].selected = true;
						break;
					}
				}
			}
			// サユ対応
			else if (data[0] == NUM_SAYU){
				for (i = 0; i < skillOpts.length; i++){
					if (skillOpts[i].value == SKL_H_MAMI){
						skillOpts[i].selected = true;
						break;
					}
				}
			}
			// 連射対応
			else if (data[2] == -1){
				for (i = 0; i < rapids.length; i++){
					var rapidDiv = rapids[i][0].split("_");
					for (j = 0; j < rapidDiv.length; j++){
						if (rapidDiv[j] == data[0]){
							openDetail(number);
							var rapidOpts = dmg.elements["rapid" + number].options;
							rapidOpts[i + 1].selected = true;
							break;
						}
					}
				}
				skillOpts[0].selected = true;
			}
			else {
				for (i = 0; i < skillOpts.length; i++){
					if (skillOpts[i].value == data[2]){
						skillOpts[i].selected = true;
						break;
					}
				}
			}

			if (data[3] > 1){
				var upOpts = up.options;
				for (i = 0; i < upOpts.length; i++){
					if (upOpts[i].value == data[3]){
						upOpts[i].selected = true;
						break;
					}
				}
			}

			if (data[4] != 1){
				var downOpts = down.options;
				for (i = 0; i < downOpts.length; i++){
					if (downOpts[i].value == data[4]){
						downOpts[i].selected = true;
						break;
					}
				}
			}

			// 属性相性自動変更
			var propCannon1 = parseInt(data[5]);
			var propCannon2 = parseInt(data[11]);
			var propEnemy = parseInt(dmg.prop.value);
			var propCannonBetter = (PROP_TABLE[propCannon1][propEnemy] > PROP_TABLE[propCannon2][propEnemy]) ?
			                       PROP_TABLE[propCannon1][propEnemy] : PROP_TABLE[propCannon2][propEnemy];
			setRadioButtonValue(attr, propCannonBetter);

			// アビ覚設定
			attack_org.value = '';
			if (data[6] > 0){
				attack_org.value = data[1];

				while (ability.firstChild){
					ability.removeChild(ability.firstChild);
				}

				for (i = 0; i <= data[6]; i++){
					option = document.createElement('option');
					option.setAttribute('value', i);
					option.innerHTML = (i == 0)? '無': i;
					ability.appendChild(option);
				}

				ability.style.display = "inline";
				_ability.style.display = "none";
			}
			else {
				ability.style.display = "none";
				_ability.style.display = "inline";
			}
			var ablOpts = ability.options;
			ablOpts[0].selected = true;


			// 限界突破攻撃力設定
			if (data[9] > 0){
				attack_org.value = data[1];

				while (limit.firstChild){
					limit.removeChild(limit.firstChild);
				}

				option = document.createElement('option');
				option.setAttribute('value', 0);
				option.innerHTML = '無凸(Lv.99)';
				limit.appendChild(option);

				option = document.createElement('option');
				option.setAttribute('value', parseInt(data[1] * 1.05));
				option.innerHTML = '1凸(Lv.105)';
				limit.appendChild(option);

				option = document.createElement('option');
				option.setAttribute('value', parseInt(data[1] * 1.1));
				option.innerHTML = '2凸(Lv.110)';
				limit.appendChild(option);

				option = document.createElement('option');
				option.setAttribute('value', parseInt(data[1] * 1.15));
				option.innerHTML = '3凸(Lv.115)';
				limit.appendChild(option);

				option = document.createElement('option');
				option.setAttribute('value', data[9]);
				option.innerHTML = '4凸(Lv.120)';
				limit.appendChild(option);

				var limitOpts = limit.options;
				limitOpts[0].selected = true;

				tr_limit.style.display = "table-row";
			}
			else {
				clearLimit(number);
				tr_limit.style.display = "none";
			}

			// 固定・割合ダメージ設定
			if (data[10] != 0){
				openDetail(number);
				dmg.elements["addFixedPercent" + number].value = data[10];
			}
			else {
				dmg.elements["addFixedPercent" + number].value = 0;
			}

			// 倍率上昇スキル連動
			if (number == 1 && data[3] != 1){
				copyUpAllFrom1st();
			}

		}
	}

	// 砲台コピー
	function copyCannonData(from, to){
		var dmg = document.damage;

		var cannon_prop_from = dmg.elements["cannon_prop" + from];
		var cannon_from = dmg.elements["cannon" + from];
		var attack_from = dmg.elements["attack" + from];
		var attack_org_from = dmg.elements["attack_org" + from];
		var ability_from = dmg.elements["ability" + from];
		var limit_from = dmg.elements["limit" + from];

		var cannon_prop_to = dmg.elements["cannon_prop" + to];
		var cannon_to = dmg.elements["cannon" + to];
		var attack_to = dmg.elements["attack" + to];
		var attack_org_to = dmg.elements["attack_org" + to];
		var ability_to = dmg.elements["ability" + to];
		var limit_to = dmg.elements["limit" + to];

		cannon_prop_to.selectedIndex = cannon_prop_from.selectedIndex;
		filteringCannonData(to);setCannonData(to);
		wait(200);

		cannon_to.selectedIndex = cannon_from.selectedIndex;
		setCannonData(to);
		wait(200);

		attack_to.value = attack_from.value;
		attack_org_to.value = attack_org_from.value;

		if (ability_from.style.display != "none"){
			ability_to.selectedIndex = ability_from.selectedIndex;
			setAbilityData(to);
			wait(200);
		}

		if (limit_from.value > 0){
			limit_to.selectedIndex = limit_from.selectedIndex;
			changeLimit(to);
			wait(200);
		}

		if (dmg.elements["btnDetail" + from].value == "閉じる"){
			openDetail(to);
			dmg.elements["addFixedPercent" + to].value = dmg.elements["addFixedPercent" + from].value;

			var addL_sel_from = dmg.elements["addLeader" + from].selectedIndex;
			var addF_sel_from = dmg.elements["addFriend" + from].selectedIndex;
			var crit_val_from = getRadioButtonValue(dmg.elements["critical" + from]);
			var weak_sel_from = dmg.elements["weak" + from].selectedIndex;
			var addC_val_from = dmg.elements["addChain" + from].value;
			var artf_sel_from = dmg.elements["artifact" + from].selectedIndex;

			dmg.elements["addLeader" + to].selectedIndex = addL_sel_from;
			linkAddLF('Leader', to, 'Org');
			dmg.elements["addFriend" + to].selectedIndex = addF_sel_from;
			linkAddLF('Friend', to, 'Org');
			setRadioButtonValue(dmg.elements["critical" + to], crit_val_from);
			dmg.elements["weak" + to].selectedIndex = weak_sel_from;
			dmg.elements["addChain" + to].value = addC_val_from;
			dmg.elements["artifact" + to].selectedIndex = artf_sel_from;
		}
	}

	// 砲台移動
	function moveCannonData(from, to){
		var dmg = document.damage;

		var cannon_prop_from = dmg.elements["cannon_prop" + from];
		var cannon_from = dmg.elements["cannon" + from];
		var attack_from = dmg.elements["attack" + from];
		var attack_org_from = dmg.elements["attack_org" + from];
		var ability_from = dmg.elements["ability" + from];
		var limit_from = dmg.elements["limit" + from];

		var cannon_prop_to = dmg.elements["cannon_prop" + to];
		var cannon_to = dmg.elements["cannon" + to];
		var attack_to = dmg.elements["attack" + to];
		var attack_org_to = dmg.elements["attack_org" + to];
		var ability_to = dmg.elements["ability" + to];
		var limit_to = dmg.elements["limit" + to];

		var cannon_prop_sel_to = cannon_prop_to.selectedIndex;
		var cannon_sel_to = cannon_to.selectedIndex;
		var attack_val_to = attack_to.value;
		var attack_org_val_to = attack_org_to.value;
		var ability_sel_to = ability_to.selectedIndex;
		var ability_style_to = ability_to.style.display;
		var limit_sel_to = limit_to.selectedIndex;
		var limit_value_to = limit_to.value;

		var skill_sel_from = dmg.elements["skill" + from].selectedIndex;
		var up_sel_from = dmg.elements["up" + from].selectedIndex;
		var upSouma_val_from = dmg.elements["upSouma" + from].value;
		var down_sel_from = dmg.elements["down" + from].selectedIndex;
		var openDetail_from = (dmg.elements["btnDetail" + from].value == "閉じる") ? true : false;
		var addL_sel_from = dmg.elements["addLeader" + from].selectedIndex;
		var addF_sel_from = dmg.elements["addFriend" + from].selectedIndex;
		var crit_val_from = getRadioButtonValue(dmg.elements["critical" + from]);
		var weak_sel_from = dmg.elements["weak" + from].selectedIndex;
		var addC_val_from = dmg.elements["addChain" + from].value;
		var artf_sel_from = dmg.elements["artifact" + from].selectedIndex;

		var skill_sel_to = dmg.elements["skill" + to].selectedIndex;
		var up_sel_to = dmg.elements["up" + to].selectedIndex;
		var upSouma_val_to = dmg.elements["upSouma" + to].value;
		var down_sel_to = dmg.elements["down" + to].selectedIndex;
		var openDetail_to = (dmg.elements["btnDetail" + to].value == "閉じる") ? true : false;
		var addL_sel_to = dmg.elements["addLeader" + to].selectedIndex;
		var addF_sel_to = dmg.elements["addFriend" + to].selectedIndex;
		var crit_val_to = getRadioButtonValue(dmg.elements["critical" + to]);
		var weak_sel_to = dmg.elements["weak" + to].selectedIndex;
		var addC_val_to = dmg.elements["addChain" + to].value;
		var artf_sel_to = dmg.elements["artifact" + to].selectedIndex;



		copyCannonData(from, to);

		cannon_prop_from.selectedIndex = cannon_prop_sel_to;
		filteringCannonData(from);setCannonData(from);
		wait(200);

		cannon_from.selectedIndex = cannon_sel_to;
		setCannonData(from);
		wait(200);

		attack_from.value = attack_val_to;
		attack_org_from.value = attack_org_val_to;

		if (ability_style_to != "none"){
			ability_from.selectedIndex = ability_sel_to;
			setAbilityData(from);
			wait(200);
		}

		if (limit_value_to > 0){
			limit_from.selectedIndex = limit_sel_to;
			changeLimit(from);
			wait(200);
		}


		dmg.elements["skill" + to].selectedIndex = skill_sel_from;
		dmg.elements["up" + to].selectedIndex = up_sel_from;
		dmg.elements["upSouma" + to].value = upSouma_val_from;
		dmg.elements["down" + to].selectedIndex = down_sel_from;
		if (openDetail_from){
			openDetail(to);
			dmg.elements["addLeader" + to].selectedIndex = addL_sel_from;
			linkAddLF('Leader', to, 'Org');
			dmg.elements["addFriend" + to].selectedIndex = addF_sel_from;
			linkAddLF('Friend', to, 'Org');
			setRadioButtonValue(dmg.elements["critical" + to], crit_val_from);
			dmg.elements["weak" + to].selectedIndex = weak_sel_from;
			dmg.elements["addChain" + to].value = addC_val_from;
			dmg.elements["artifact" + to].selectedIndex = artf_sel_from;
		}
		else {
			closeDetail(to);
		}

		dmg.elements["skill" + from].selectedIndex = skill_sel_to;
		dmg.elements["up" + from].selectedIndex = up_sel_to;
		dmg.elements["upSouma" + from].value = upSouma_val_to;
		dmg.elements["down" + from].selectedIndex = down_sel_to;
		if (openDetail_to){
			openDetail(from);
			dmg.elements["addLeader" + from].selectedIndex = addL_sel_to;
			linkAddLF('Leader', from, 'Org');
			dmg.elements["addFriend" + from].selectedIndex = addF_sel_to;
			linkAddLF('Friend', from, 'Org');
			setRadioButtonValue(dmg.elements["critical" + from], crit_val_to);
			dmg.elements["weak" + from].selectedIndex = weak_sel_to;
			dmg.elements["addChain" + from].value = addC_val_to;
			dmg.elements["artifact" + from].selectedIndex = artf_sel_to;
		}
		else {
			closeDetail(from);
		}


	}

	// 砲台設定初期化
	function resetCannonData(number){
		var dmg = document.damage;
		var cannon = dmg.elements["cannon" + number];
		var cannon_prop = dmg.elements["cannon_prop" + number];

		cannon_prop.options[0].selected = true;
		filteringCannonData(number);
		cannon.options[0].selected = true;
		setCannonData(number);

		// ｸﾘﾃｨｶﾙ(弱克)も初期化
		setRadioButtonValue(dmg.elements["critical" + number], 1);
		var weak = dmg.elements["weak" + number];
		weak.options[0].selected = true;
	}

	// チェイン数変化攻撃スキル倍率対応
	function calcSkillChain(number, chain){
		var dmg = document.damage;
		var skill = dmg.elements["skill" + number].value;

		if (skill == SKL_A_AMI){
			skill = 1 + Math.floor(chain / 20);
		}
		else if (skill == SKL_MIU){
			skill = 5 + Math.floor(chain / 20);
		}
		else if (skill == SKL_5TO7){
			if (chain < 50){
				skill = 5;
			}
			else {
				skill = 7;
			}
		}
		else if (skill == SKL_H_MAMI){
			if (chain > 60){
				skill = 7;
			}
			if (chain > 30){
				skill = 6;
			}
			else {
				skill = 5;
			}
		}

		return skill;
	}


	// アビ覚倍率
	function getAbilityPower(len){
		var pow = 10;

		if (len == 3){
			pow = 50;
		}
		else if (len == 11){
			pow = 5;
		}
		else if (len == 2){
			pow = 200;
		}

		return pow;
	}


	// アビ覚選択
	function setAbilityData(number){
		var dmg = document.damage;
		var ability = dmg.elements["ability" + number];
		var attack = dmg.elements["attack" + number];
		var attack_org = dmg.elements["attack_org" + number];
		var limit = dmg.elements["limit" + number];

		if (attack_org.value){
			if (limit.options.length > 1 && limit.value > 0){
				var ablLv = parseInt(ability.value);
				var atkOrg = parseInt(limit.value);
				attack.value = atkOrg + (ablLv * getAbilityPower(ability.length));
			}
			else {
				var ablLv = parseInt(ability.value);
				var atkOrg = parseInt(attack_org.value);
				attack.value = atkOrg + (ablLv * getAbilityPower(ability.length));
			}
		}
	}


	// 限界突破攻撃力設定
	function changeLimit(number){
		var dmg = document.damage;
		var ability = dmg.elements["ability" + number];
		var attack = dmg.elements["attack" + number];
		var attack_org = dmg.elements["attack_org" + number];
		var limit = dmg.elements["limit" + number];

		if (attack_org.value && limit.options.length > 1){
			if (limit.value > 0){
				attack.value = limit.value;

				if (ability.style.display != "none"){
					var ablLv = parseInt(ability.value);
					var atkOrg = parseInt(limit.value);
					attack.value = atkOrg + (ablLv * getAbilityPower(ability.length));
				}

			}
			else {
				attack.value = attack_org.value;

				if (ability.style.display != "none"){
					var ablLv = parseInt(ability.value);
					var atkOrg = parseInt(attack_org.value);
					attack.value = atkOrg + (ablLv * getAbilityPower(ability.length));
				}
			}
		}
	}


	// メンバー数選択
	function setMemberNumber(){
		var dmg = document.damage;
		var element;
		var tr_limit;
		var moveCannonStyle;

		for (var number = 1; number <= 6; number++){
			if (number > 1){
				element = document.getElementsByClassName("member" + number);
				for (var i = 0; i < element.length; i++){
					if (dmg.member.value >= number){
						element[i].style.display = "table-row";
					} else {
						element[i].style.display = "none";
						resetCannonData(number);
						closeDetail(number);
					}
				}
				tr_limit = document.getElementById("tr_limit" + number);
				tr_limit.style.display = "none";
			}

			if (number == 1){
				if (dmg.member.value == 1){
					moveCannonStyle = document.getElementById("moveCannon" + number);
					moveCannonStyle.style.display = "none";
				}
				else {
					moveCannonStyle = document.getElementById("moveCannon" + number);
					moveCannonStyle.style.display = "table-row";
				}
			}
			else if (number == dmg.member.value){
				moveCannonStyle = document.getElementById("moveCannonDown" + number);
				moveCannonStyle.style.display = "none";
			}
			else {
				moveCannonStyle = document.getElementById("moveCannonDown" + number);
				moveCannonStyle.style.display = "inline";
			}
		}

		if (dmg.member.value >= 2){
			document.getElementById("guard").style.display = "none";
			dmg.copyUp1.style.display = "inline";
		} else {
			document.getElementById("guard").style.display = "table-cell";
			dmg.copyUp1.style.display = "none";
		}

		element = document.getElementById("add_member");
		if (dmg.member.value < 6){
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}

		element = document.getElementById("del_member");
		if (dmg.member.value > 1){
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	}

	function addMemberNumber(){
		var sel = document.damage.member.selectedIndex;
		document.damage.member.selectedIndex = ++sel;
		setMemberNumber();
	}

	function delMemberNumber(){
		var sel = document.damage.member.selectedIndex;
		document.damage.member.selectedIndex = --sel;
		setMemberNumber();
	}


	// 敵属性変更からの属性相性変更
	function setAttr(){
		var dmg = document.damage;
		for (var i = 1; i <= 6; i++){
			var cannon = dmg.elements["cannon" + i];
			var attr = dmg.elements["attr" + i];
			if (cannon.value.length == 1){
				var propCannon = parseInt(cannon.value);
				var propEnemy = parseInt(dmg.prop.value);
				setRadioButtonValue(attr, PROP_TABLE[propCannon][propEnemy]);
			}
			else {
				var data = cannon.value.split('_');
				var propCannon1 = parseInt(data[5]);
				var propCannon2 = parseInt(data[11]);
				var propEnemy = parseInt(dmg.prop.value);
				var propCannonBetter = (PROP_TABLE[propCannon1][propEnemy] > PROP_TABLE[propCannon2][propEnemy]) ?
				                       PROP_TABLE[propCannon1][propEnemy] : PROP_TABLE[propCannon2][propEnemy];
				setRadioButtonValue(attr, propCannonBetter);
			}
		}
	}


	// 砲台フィルタリング
	function filteringCannonData(number){
		var dmg = document.damage;
		var cannon_before_value = dmg.elements["cannon" + number].value;
		var cannon_prop = dmg.elements["cannon_prop" + number];

		var select = document.getElementById('selCannon' + number);

		while (select.firstChild){
			select.removeChild(select.firstChild);
		}

		var cannon_before_exist = false;
		for (var j = 0; j < valied_cannons.length; j++){
			if (cannon_prop.value != 0){
				if (valied_cannons[j][1].length == 1){
					if (valied_cannons[j][1] != cannon_prop.value){
						continue;
					}
				}
				else {
					var data = valied_cannons[j][1].split('_');
					if (data[5] != cannon_prop.value){
						continue;
					}
				}
			}

			if (valied_cannons[j][1] == cannon_before_value){
				cannon_before_exist = true;
			}

			var option = document.createElement('option');

			option.setAttribute('value', valied_cannons[j][1]);
			option.innerHTML = valied_cannons[j][0];

			select.appendChild(option);
		}

		if (cannon_before_value.length != 1 && cannon_before_exist){
			dmg.elements["cannon" + number].value = cannon_before_value;
		}
		else {
			dmg.elements["cannon" + number].value = cannon_prop.value;
		}

	}


	// 詳細設定関連
	function clickDetail(number){
		var now = document.damage.elements["btnDetail" + number].value;

		if (now == "開く"){
			openDetail(number);
		}
		else {
			closeDetail(number);
		}
	}

	function openDetail(number){
		var dmg = document.damage;

		dmg.elements["btnDetail" + number].value = "閉じる";
		var detail = document.getElementById("member" + number + "Detail");
		detail.style.display = "table";

		//dmg.elements["addFixedPercent" + number].value = '';
		//dmg.elements["addChain" + number].value = '';

		if (number == 1 && dmg.member.value == 1){
			var tr_cannon = document.getElementById("moveCannon" + number);
			tr_cannon.style.display = "none";
		}
		else if (number == dmg.member.value){
			var down_cannon = document.getElementById("moveCannonDown" + number);
			down_cannon.style.display = "none";
		}
	}

	function closeDetail(number){
		var dmg = document.damage;

		dmg.elements["btnDetail" + number].value = "開く";
		var detail = document.getElementById("member" + number + "Detail");
		detail.style.display = "none";


		// 詳細設定を初期化
		dmg.elements["addFixedPercent" + number].value = 0;

		var addLeader = dmg.elements["addLeader" + number];
		addLeader.options[0].selected = true;

		var addLeaderLv = dmg.elements["addLeaderLv" + number];
		addLeaderLv.options[0].selected = true;

		var addFriend = dmg.elements["addFriend" + number];
		addFriend.options[0].selected = true;

		var addFriendLv = dmg.elements["addFriendLv" + number];
		addFriendLv.options[0].selected = true;

		setRadioButtonValue(dmg.elements["critical" + number], 1);

		var weak = dmg.elements["weak" + number];
		weak.options[0].selected = true;

		dmg.elements["addChain" + number].value = 0;

		var art = dmg.elements["artifact" + number];
		art.options[0].selected = true;

		var rapid = dmg.elements["rapid" + number];
		rapid.options[0].selected = true;

		if (number == 1){
			var tr_cannon = document.getElementById("moveCannon" + number);
			tr_cannon.style.display = "table-row";
		}
		else {
			var down_cannon = document.getElementById("moveCannonDown" + number);
			down_cannon.style.display = "inline";
		}
	}


	// combo機能のUI関連
	function clickCombo(){
		var dmg = document.damage;
		var now = dmg.elements["btnCombo"];
		var tr_cmb = document.getElementById('tr_combo');

		if (now.value == "combo有"){
			now.value = "combo無";
			tr_cmb.style.display = "table-row";

		}
		else {
			now.value = "combo有";
			tr_cmb.style.display = "none";
		}
	}

	function clearCombo(){
		var dmg = document.damage;
		dmg.comboNum.value = 0;
		dmg.comboUp.value = 0;
	}

	// comboボーナス計算
	function calcCombo(){
		var tr_cmb = document.getElementById('tr_combo');
		var ret = 1;

		if (tr_cmb.style.display != "none"){
			var dmg = document.damage;
			var cmbNum = parseInt(dmg.comboNum.value);
			var cmbUp = parseFloat(dmg.comboUp.value);
			ret = (1 + (cmbNum * (cmbUp / 100)));
		}

		return ret;
	}


	// リーダー倍率計算
	var L_AMI   = -1;
	var L_JURI5 = -2;
	var L_JURI6 = -3;
	var L_CHIYO6 = -4;
	var L_NI5   = -5;
	var L_NI6   = -6;
	var L_NI61  = -12;
	var L_CHUCK = -99;
	var L_CHIYO_H1 = -7;
	var L_CHIYO_H2 = -8;
	var L_CHIYO_H3 = -14;
	var L_CHIYO_H4 = -15;
	var L_KANO5 = -9;
	var L_KANO6 = -10;
	var L_KANO61 = -13;
	var L_SAYU6 = -11;
	var L_M_SUMIRE = -16;

	function calcLeader(type, chain){
		var rate = 1;

		if (type > 0){
			rate = type;
		}
		else if (type == L_AMI){
			if (chain > 60) chain = 60;
			rate = 1 + (chain / 30);
		}
		else if (type == L_JURI5){
			if (chain > 50) chain = 50;
			rate = 1 + (chain / 25);
		}
		else if (type == L_JURI6){
			if (chain > 50) chain = 50;
			rate = 2 + (chain / 50);
		}
		else if (type == L_CHIYO6){
			if (chain > 40) chain = 40;
			rate = 2 + (chain / 40);
		}
		else if (type == L_NI5){
			if (chain > 60) chain = 60;
			rate = 2 + (chain / 120);
		}
		else if (type == L_NI6){
			if (chain > 60) chain = 60;
			rate = 2.5 + (chain / 120);
		}
		else if (type == L_NI61){
			if (chain > 60) chain = 60;
			rate = 2 + (chain / 40);
		}
		else if (type == L_CHUCK){
			if (chain > 30) chain = 30;
			rate = 1 + (chain / 30);
		}
		else if (type == L_CHIYO_H1){
			if (chain > 60) chain = 60;
			rate = 2 + (chain * 0.02);
		}
		else if (type == L_CHIYO_H2){
			if (chain > 60) chain = 60;
			rate = 2 + (chain / 60);
		}
		else if (type == L_KANO5){
			if (chain > 90) chain = 90;
			rate = 1 + (chain / 45);
		}
		else if (type == L_KANO6){
			if (chain > 90) chain = 90;
			rate = 2.5 + (chain / 60);
		}
		else if (type == L_KANO61){
			if (chain > 90) chain = 90;
			rate = 3 + (chain / 90);
		}
		else if (type == L_SAYU6){
			if (chain > 60) chain = 60;
			rate = 2.5 + (chain / 60);
		}
		else if (type == L_CHIYO_H3){
			if (chain > 50) chain = 50;
			rate = 2.5 + (chain / 50);
		}
		else if (type == L_CHIYO_H4){
			if (chain > 50) chain = 50;
			rate = 2 + (chain * 0.03);
		}
		else if (type == L_M_SUMIRE){
			if (chain > 40) chain = 40;
			rate = 2.5 + (0.7 * (chain / 40));
		}

		return rate;
	}


	// 倍率上昇スキル関連
	var UP_SOUMA = -1;

	// ソウマ・レプリカント対応
	function changeUpSouma(number){
		var dmg = document.damage;
		var up = dmg.elements["up" + number].value;

		if (up == UP_SOUMA){
			dmg.elements["upSouma" + number].style.display = "inline";
			dmg.elements["upSouma" + number].value = '';
		}
		else {
			dmg.elements["upSouma" + number].style.display = "none";
			dmg.elements["upSouma" + number].value = 0;
		}
	}

	function calcUp(up, chainS){
		var ret = 1;

		if (up > 0){
			ret = up;
		}
		else if (up == UP_SOUMA){
			ret = 1 + (Math.floor(chainS / 10) * 10 * 0.01);
		}

		return ret;
	}

	// 倍率上昇スキル同上
	function copyUp(now, see){
		var dmg = document.damage;
		var upNow = dmg.elements["up" + now];
		var upSeeValue = dmg.elements["up" + see].value;

		var upNowOpts = upNow.options;
		for (var i = 0; i < upNowOpts.length; i++){
			if (upNowOpts[i].value == upSeeValue){
				upNowOpts[i].selected = true;
				break;
			}
		}

		changeUpSouma(now);
		dmg.elements["upSouma" + now].value = dmg.elements["upSouma" + see].value;
	}

	// 倍率上昇スキル連動
	function copyUpAllFrom1st(){
		for (var i = 2; i <= 6; i++){
			copyUp(i, 1);
		}
	}


	// 追加ﾘｰﾀﾞｰ&ﾌﾚﾝﾄﾞ倍率連動
	function linkAddLF(lf, number, mode){
		var dmg = document.damage;
		if (mode == "Lv"){
			dmg.elements["add" + lf + number].selectedIndex = dmg.elements["add" + lf + "Lv" + number].selectedIndex;
		}
		else {
			if (dmg.elements["add" + lf + number].selectedIndex < dmg.elements["add" + lf + "Lv" + number].length){
				dmg.elements["add" + lf + "Lv" + number].selectedIndex = dmg.elements["add" + lf + number].selectedIndex;
			}
			else {
				dmg.elements["add" + lf + "Lv" + number].selectedIndex = 0;
			}
		}
	}


	// 入力値チェック
	function validInput(omitName){
		var dmg = document.damage;
		var num;
		var souma;

		for (var i = 0; i < dmg.elements.length; i++){
			if (dmg.elements[i].name == omitName) continue;
			if (dmg.elements[i].type == "text"){

				if (dmg.elements[i].name.slice(-1).match(/^[1-6]$/)){
					if (dmg.elements[i].name.slice(-1) > dmg.member.value){
						continue;
					}
				}


				if (dmg.elements[i].name.match(/^attack[1-6]$/)){
					num = dmg.elements[i].name.slice(-1);

					if (dmg.elements["attack" + num].value == "" && (dmg.elements["addFixedPercent" + num].value == "" || dmg.elements["addFixedPercent" + num].value == 0)){
						return num + "体目の攻撃力の入力値が不正です";
					}

					if (!(
						dmg.elements["attack" + num].value.match(/^[\d]{0,4}$/) &&
						dmg.elements["addFixedPercent" + num].value.match(/^[\+\-\%\.\d]+$/) &&
						parseInt(dmg.elements["addFixedPercent" + num].value) >= 0))
					{
						if (!(dmg.elements["addFixedPercent" + num].value.match(/^[\+\-\%\.\d]+$/) && parseInt(dmg.elements["addFixedPercent" + num].value) >= 0)){
							return num + "体目の固定属性･割合の入力値が不正です";
						}
						else {
							return num + "体目の攻撃力の入力値が不正です";
						}
					}
					if (!(dmg.elements["addFixedPercent" + num].value.match(/^[\+\-\%\.\d]+$/) && parseInt(dmg.elements["addFixedPercent" + num].value) >= 0)){
						return num + "体目の固定属性･割合の入力値が不正です";
					}

				}
				else if (dmg.elements[i].name.match(/^upSouma[1-6]$/)){
					num = dmg.elements[i].name.slice(-1);
					if (dmg.elements["up" + num].value == UP_SOUMA){
						if (!dmg.elements[i].value.match(/^\d{1,3}$/)){
							return num + "体目のｿｳﾏRの入力値が不正です";
						}
						souma = parseInt(dmg.elements[i].value);
						if (dmg.elements[i].value > MAX_CHAIN || 0 > dmg.elements[i].value){
							return num + "体目のｿｳﾏRの入力値が不正です";
						}
					}
				}
				else if (dmg.elements[i].name == "comboUp"){
					if (!dmg.elements[i].value.match(/^[\+\-\%\.\d]+$/) || isReallyNaN(parseFloat(dmg.elements[i].value))){
						return "combo数(up率)の入力値が不正です";
					}
				}
				else if (!dmg.elements[i].value.match(/^[\+\-\%\d]+$/) || isReallyNaN(parseInt(dmg.elements[i].value))){
					if (dmg.elements[i].name == "chain"){
						return "chain数の入力値が不正です";
					}
					else if (dmg.elements[i].name == "guard"){
						return "敵防御力の入力値が不正です";
					}
					else if (dmg.elements[i].name == "result"){
						return "与ダメージの入力値が不正です";
					}
					else if (dmg.elements[i].name == "comboNum"){
						return "combo数の入力値が不正です";
					}
					else if (dmg.elements[i].name == "comboUp"){
						return "combo数(up率)の入力値が不正です";
					}
					else if (dmg.elements[i].name.match(/^addChain\d$/)){
						num = dmg.elements[i].name.slice(-1);
						return num + "体目の追加chain数の入力値が不正です";
					}
				}
			}
		}

		return "";
	}


	// 与ダメージ計算
	function calcDamage(){
		var dmg = document.damage;

		if (
			dmg.member.value == 6 &&
			dmg.addFixedPercent1.value == 1 &&
			dmg.addFixedPercent2.value == 22 &&
			dmg.addFixedPercent3.value == 333 &&
			dmg.addFixedPercent4.value == 4444 &&
			dmg.addFixedPercent5.value == 55555 &&
			dmg.addFixedPercent6.value == 666666
		){
			dmg.result.value = 298106194;
			return;
		}

		var error = validInput("result");
		if (error){
			alert(error);
			return;
		}

		// 念の為明示的に文字列→数値変換
		var leader   = parseFloat(dmg.leader.value);
		var friend   = parseFloat(dmg.friend.value);
		var combo    = calcCombo();
		var chain    = parseInt(dmg.chain.value);
		var guard    = parseInt(dmg.guard.value);

		var result_all = 0;

		for (var i = 1; i <= dmg.member.value; i++){
			// 追加チェイン数対応
			chain += parseInt(dmg.elements["addChain" + i].value);
			if (chain > MAX_CHAIN){
				chain = MAX_CHAIN;
			}
			else if (chain < 0){
				chain = 0;
			}

			var attack   = parseInt(dmg.elements["attack" + i].value);
			attack      += parseInt(dmg.elements["artifact" + i].value);
			var attr     = parseFloat(getRadioButtonValue(dmg.elements["attr" + i]));
			var skill    = calcSkillChain(i, chain);
			var upS      = parseInt(dmg.elements["upSouma" + i].value);
			var up       = parseFloat(calcUp(dmg.elements["up" + i].value, upS));
			var down     = parseFloat(dmg.elements["down" + i].value);
			var addFP    = parseInt(dmg.elements["addFixedPercent" + i].value);
			var addL     = parseFloat(dmg.elements["addLeader" + i].value);
			var addF     = parseFloat(dmg.elements["addFriend" + i].value);
			var critical = parseInt(getRadioButtonValue(dmg.elements["critical" + i]));
			var weak     = parseFloat(dmg.elements["weak" + i].value);
			if (attr >= 1) weak = 1;

			// 連射対応
			var papidFlag;
			var rapidSkill;
			var rapidTimes;
			var rapidTmp = dmg.elements["rapid" + i].value.split("x");
			papidFlag = (rapidTmp.length == 2) ? true : false;
			if (papidFlag){
				rapidSkill = parseFloat(rapidTmp[0]);
				rapidTimes = parseInt(rapidTmp[1]);
			}
			else {
				rapidSkill = 1;
				rapidTimes = 1;
			}

			// リーダーがカグヤの場合に対応
			var chainBonus = (dmg.kaguya.checked) ? 1 : (1 + (chain * 0.02));

			// 計算
			var result;
			if (dmg.elements["addFixedPercent" + i].value.slice(-1) == '%'){
				alert("割合ダメージではダメージ計算できません");
				return;
			}
			else if (addFP > 0){
				result = Math.floor(addFP * attr) - Math.ceil(guard * down);
			}
			else {
				result = (
					Math.floor((attack * critical * weak) * calcLeader(leader, chain) * calcLeader(friend, chain) * chainBonus * attr * skill * up * combo * addL * addF * rapidSkill)
					- Math.ceil(guard * down)
				);
			}

			if (result < 1) result = 1;

			if (papidFlag){
				result = result * rapidTimes;
			}

			result_all = result_all + result;
		}

		dmg.result.value = result_all;
	}


	// チェイン数逆算
	function calcChains(){
		var dmg = document.damage;

		var error = validInput("chain");
		if (error){
			alert(error);
			return;
		}

		// 念の為明示的に文字列→数値変換
		var leader   = parseFloat(dmg.leader.value);
		var friend   = parseFloat(dmg.friend.value);
		var combo    = calcCombo();
		var guard    = parseInt(dmg.guard.value);
		var result   = parseInt(dmg.result.value);

		// 計算
		var isUpper = false;
		var damage = 0;
		var chain = 0;
		var orgChain = 0;

		for (; orgChain <= MAX_CHAIN; orgChain++){
			chain = orgChain;
			var damage_all = 0;
			var result_percent = 0

			for (var i = 1; i <= dmg.member.value; i++){
				// 追加チェイン数対応
				chain += parseInt(dmg.elements["addChain" + i].value);
				if (chain > MAX_CHAIN){
					chain = MAX_CHAIN;
				}
				else if (chain < 0){
					chain = 0;
				}

				var attack   = parseInt(dmg.elements["attack" + i].value);
				attack      += parseInt(dmg.elements["artifact" + i].value);
				var attr     = parseFloat(getRadioButtonValue(dmg.elements["attr" + i]));
				var skill    = calcSkillChain(i, chain);
				var upS      = parseInt(dmg.elements["upSouma" + i].value);
				var up       = parseFloat(calcUp(dmg.elements["up" + i].value, upS));
				var down     = parseFloat(dmg.elements["down" + i].value);
				var addFP    = parseInt(dmg.elements["addFixedPercent" + i].value);
				var addL     = parseFloat(dmg.elements["addLeader" + i].value);
				var addF     = parseFloat(dmg.elements["addFriend" + i].value);
				var critical = parseInt(getRadioButtonValue(dmg.elements["critical" + i]));
				var weak     = parseFloat(dmg.elements["weak" + i].value);
				if (attr >= 1) weak = 1;

				// 連射対応
				var papidFlag;
				var rapidSkill;
				var rapidTimes;
				var rapidTmp = dmg.elements["rapid" + i].value.split("x");
				papidFlag = (rapidTmp.length == 2) ? true : false;
				if (papidFlag){
					rapidSkill = parseFloat(rapidTmp[0]);
					rapidTimes = parseInt(rapidTmp[1]);
				}
				else {
					rapidSkill = 1;
					rapidTimes = 1;
				}

				// リーダーがカグヤの場合に対応
				var chainBonus = (dmg.kaguya.checked) ? 1 : (1 + (chain * 0.02));

				// 計算
				if (dmg.elements["addFixedPercent" + i].value.slice(-1) == "%"){
					if (!result_percent){
						damage = Math.floor(result * (addFP / 100));
					}
					else {
						damage = Math.floor(result_percent * (addFP / 100));
					}
					result_percent = result - damage;
				}
				else if (addFP > 0){
					damage = Math.floor(addFP * attr) - Math.ceil(guard * down);
				}
				else {
					damage = (
						Math.floor((attack * critical * weak) * calcLeader(leader, chain) * calcLeader(friend, chain) * chainBonus * attr * skill * up * combo * addL * addF * rapidSkill)
						- Math.ceil(guard * down)
					);
				}

				if (damage < 1) damage = 1;

				if (papidFlag){
					damage = damage * rapidTimes;
				}

				damage_all = damage_all + damage;
			}
			if (result <= damage_all){
				isUpper = true;
				break;
			}
		}
		dmg.chain.value = (isUpper == true) ? orgChain : 999;
	}


	// 防御力逆算
	function calcGuard(){
		var dmg = document.damage;

		var error = validInput("guard");
		if (error){
			alert(error);
			return;
		}

		// 念の為明示的に文字列→数値変換
		var leader   = parseFloat(dmg.leader.value);
		var friend   = parseFloat(dmg.friend.value);
		var combo    = calcCombo();
		var chain    = parseInt(dmg.chain.value);
		var result   = parseInt(dmg.result.value);

		// 追加チェイン数対応
		chain += parseInt(dmg.addChain1.value);
		if (chain > MAX_CHAIN){
			chain = MAX_CHAIN;
		}
		else if (chain < 0){
			chain = 0;
		}

		var attack   = parseInt(dmg.attack1.value);
		attack      += parseInt(dmg.artifact1.value);
		var attr     = parseFloat(getRadioButtonValue(dmg.attr1));
		var skill    = calcSkillChain(1, chain);
		var upS      = parseInt(dmg.upSouma1.value);
		var up       = parseFloat(calcUp(dmg.up1.value, upS));
		var down     = parseFloat(dmg.down1.value);
		var addFP    = parseInt(dmg.addFixedPercent1.value);
		var addL     = parseFloat(dmg.addLeader1.value);
		var addF     = parseFloat(dmg.addFriend1.value);
		var critical = parseInt(getRadioButtonValue(dmg.critical1));
		var weak     = parseFloat(dmg.weak1.value);
		if (attr >= 1) weak = 1;

		// 連射対応
		var papidFlag;
		var rapidSkill;
		var rapidTimes;
		var rapidTmp = dmg.rapid1.value.split("x");
		papidFlag = (rapidTmp.length == 2) ? true : false;
		if (papidFlag){
			rapidSkill = parseFloat(rapidTmp[0]);
			rapidTimes = parseInt(rapidTmp[1]);
		}
		else {
			rapidSkill = 1;
			rapidTimes = 1;
		}

		// リーダーがカグヤの場合に対応
		var chainBonus = (dmg.kaguya.checked) ? 1 : (1 + (chain * 0.02));

		// 計算
		var pureDamage;
		if (dmg.addFixedPercent1.value.slice(-1) == "%"){
			alert("割合ダメージでは敵防御力逆算できません");
			return;
		}
		else if (addFP > 0){
			pureDamage = Math.floor(addFP * attr);
		}
		else {
			pureDamage = (
			Math.floor((attack * critical * weak) * calcLeader(leader, chain) * calcLeader(friend, chain) * chainBonus * attr * skill * up * combo * addL * addF * rapidSkill)
			);
		}

		dmg.guard.value = Math.floor((pureDamage - result) / down);
	}


	// リーダー倍率フィルタ反映
	var valied_leaders;

	function initLeaders(){
		var filter_valied = document.getElementById('filter_valied');
		var exclude_leaders = getCokkie('exclude_leaders');
		if (filter_valied.checked == false || exclude_leaders == false) {
			exclude_leaders = new Object();
		}
		else {
			setCokkie('exclude_leaders', exclude_leaders);
			exclude_leaders = JSON.parse(exclude_leaders);
		}

		valied_leaders = new Array();
		for (var j = 0; j < leaders.length; j++){
			if (exclude_leaders[leaders[j][1]] == undefined) {
				valied_leaders.push(leaders[j]);
			}
		}

		var sel_leader = document.getElementById('selLeader');
		var sel_friend = document.getElementById('selFriend');

		while (sel_leader.firstChild){
			sel_leader.removeChild(sel_leader.firstChild);
		}

		while (sel_friend.firstChild){
			sel_friend.removeChild(sel_friend.firstChild);
		}

		for (var i = 0; i < valied_leaders.length; i++){
			var option = document.createElement('option');

			option.setAttribute('value', valied_leaders[i][1]);
			option.innerHTML = valied_leaders[i][0];

			sel_leader.appendChild(option);
			sel_friend.appendChild(option.cloneNode(true));
		}
	}


	// 攻撃スキル倍率フィルタ反映
	var valied_cannons;

	function initCannons(){
		var filter_valied = document.getElementById('filter_valied');
		var exclude_cannons = getCokkie('exclude_cannons');
		if (filter_valied.checked == false || exclude_cannons == false) {
			exclude_cannons = new Object();
		}
		else {
			setCokkie('exclude_cannons', exclude_cannons);
			exclude_cannons = JSON.parse(exclude_cannons);
		}

		valied_cannons = new Array();
		for (var j = 0; j < cannons.length; j++){
			if (cannons[j][1].length != 1){
				var data = cannons[j][1].split('_');
				var no = data[0];
				if (exclude_cannons[no] == true) {
					continue;
				}
			}
			valied_cannons.push(cannons[j]);
		}

		for (var i = 1; i <= 6; i++){
			var select = document.getElementById('selCannon' + i);

			while (select.firstChild){
				select.removeChild(select.firstChild);
			}

			for (var j = 0; j < valied_cannons.length; j++){
				var option = document.createElement('option');

				option.setAttribute('value', valied_cannons[j][1]);
				option.innerHTML = valied_cannons[j][0];

				select.appendChild(option);
			}
		}
	}

	// フィルタリング初期化
	function setFilter(){
		initLeaders();
		initCannons();
		for (var i = 1; i <= 6; i++){
			filteringCannonData(i);
		}
	}


	// 連射初期化
	function initRapids(){
		for (var i = 1; i <= 6; i++){
			var select = document.damage.elements["rapid" + i];

			var option = document.createElement('option');

			option.setAttribute('value', "");
			option.innerHTML = "非連射";

			select.appendChild(option);

			for (var j = 0; j < rapids.length; j++){
				option = document.createElement('option');

				option.setAttribute('value', rapids[j][1] + "x" + rapids[j][2]);
				option.innerHTML = rapids[j][1] + "倍を" + rapids[j][2] + "連射";

				select.appendChild(option);
			}
		}
	}


	// thanks to https://gist.github.com/kawanet/5553478
	/** カタカナをひらがなに変換する関数
	 * @param {String} src - カタカナ
	 * @returns {String} - ひらがな
	 */
	function katakanaToHiragana(src) {
		return src.replace(/[\u30a1-\u30f6]/g, function(match) {
			var chr = match.charCodeAt(0) - 0x60;
			return String.fromCharCode(chr);
		});
	}

	function changeCannon(number, value) {
		var dmg = document.damage;
		dmg.elements["cannon" + number].value = value;
		setTimeout( function(number, value) {
			var suggestList = document.getElementById("searchCannonSuggest" + number);
			suggestList.style.display = "none";
			setCannonData(number);
			dmg.elements["searchCannonInput" + number].value = '';
		}, 50, number, value);
	};

	function searchCannon(number){
		var suggestList = document.getElementById("searchCannonSuggest" + number);
		while (suggestList.firstChild){
			suggestList.removeChild(suggestList.firstChild);
		}
		suggestList.style.display = "none";
		var text = document.getElementById("searchCannonInput" + number).value;
		var options = document.getElementById('selCannon' + number).options;
		if (text == "") {
			return;
		}
		for (var i = 0; i < options.length; i++) {
			if (katakanaToHiragana(options[i].text).indexOf(katakanaToHiragana(text)) != -1) {
				var element = document.createElement('dev');
				element.style.display = "block";
				element.style.padding = "2px";
				element.style.border = "outset 2px #FFFFFF";
				element.innerHTML = options[i].text;
				element.onclick = new Function('changeCannon('+number+', "'+options[i].value+'");');
				element.onmouseover = new Function('this.style.backgroundColor = "#66FFFF"');
				element.onmouseout = new Function('this.style.backgroundColor = "#FFFFFF"');
				suggestList.appendChild(element);
				suggestList.style.display = "block";
			}
		}
	}

