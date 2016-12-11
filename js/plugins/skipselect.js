//=============================================================================
// skipselect.js
//=============================================================================

/*:
 * @plugindesc Skip character selection on menu.
 * @author Mahdiarn
 *
 * @help • Tinggal nyalain plugin, syaratnya matiin formation dan set actornya
 * menjadi satu orang (formation ga perlu kalau actor nya cuman 1).
 * 
 * • Kalau misalnya pakai lebih dari satu actor, pakai page up/page down 
 * untuk ganti actor di menu skill, status, dan equip.
 */
 
 (
 function () {
	Scene_Menu.prototype.createCommandWindow = function() {
		this._commandWindow = new Window_MenuCommand(0, 0);
		this._commandWindow.setHandler('item',      this.commandItem.bind(this));
		this._commandWindow.setHandler('skill',     this.commandSkill.bind(this));
		this._commandWindow.setHandler('equip',     this.commandEquip.bind(this));
		this._commandWindow.setHandler('status',    this.commandStatus.bind(this));
		this._commandWindow.setHandler('formation', this.commandFormation.bind(this));
		this._commandWindow.setHandler('options',   this.commandOptions.bind(this));
		this._commandWindow.setHandler('save',      this.commandSave.bind(this));
		this._commandWindow.setHandler('gameEnd',   this.commandGameEnd.bind(this));
		this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
		this.addWindow(this._commandWindow);
	};
	//Memanggil skill tanpa select actor
	Scene_Menu.prototype.commandSkill = function() {
		SceneManager.push(Scene_Skill);
	};
	//Memanggil equip tanpa select actor
	Scene_Menu.prototype.commandEquip = function() {
		SceneManager.push(Scene_Equip);
	};
	//Memanggil status tanpa select actor
	Scene_Menu.prototype.commandStatus = function() {
		SceneManager.push(Scene_Status);
	};
 }
 )();