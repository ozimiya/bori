var HPG = HPG || {};
HPG.TEST = {
	init: function(){
		this.setParam();
		this.bindEvent();
	},
	setParam: function(){
		this.modalOpenTriggers = $('.jsc-open-btn');
		this.modalCloseTriggers = $('.jsc-close-btn').find('a');
		this.modalTargets = $('.jsc-modal-body');
		this.icnOpenPath = '/MIYA/img/open.png';
		this.icnClosePath = '/MIYA/img/close.png';
		this.modalState = {
			show: false,
			trigger: null,
		}
	},
	bindEvent: function(){
		var _self = this;

		this.modalOpenTriggers.on('click', function(e){
			e.preventDefault();
			if(_self.modalState.show){
				_self.closeModal($(this));
			if(_self.modalState.trigger.html() !== $(this).html()){
				_self.otherClickTarget($(this))
			}
			}else{
				_self.showModal($(this));
			}
		});
		this.modalCloseTriggers.on('click', function(e){
			e.preventDefault();
			_self.closeModal(_self.modalState.trigger);
		});
	},
	showModal: function(_trigger){
		this.modalState.show = true;
		this.modalState.trigger = _trigger;
		this.modalAction(_trigger);
	},
	closeModal: function(_trigger){
		this.modalState.show = false;
		this.modalAction(_trigger);
	},
	modalAction: function(_trigger){
		if(this.modalState.show){
			_trigger.next(this.modalTargets).removeClass('dn');
			_trigger.find('a').html('髢峨§繧�');
			_trigger.find('img').attr('src', this.icnClosePath);
		}else{
			this.modalTargets.addClass('dn');
			_trigger.find('a').html('髢九￥');
			_trigger.find('img').attr('src', this.icnOpenPath);
		}
	},
	otherClickTarget: function(_trigger){
		this.modalState.trigger.find('a').html('髢九￥');
		this.modalState.trigger.find('img').attr('src', this.icnOpenPath);
		this.showModal(_trigger);
	}
};

$(window).on('load', function(){
	HPG.TEST.init();
});