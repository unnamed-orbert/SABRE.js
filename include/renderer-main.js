/**
 * @typedef {{
 *      load:function({info:Object,parser:Object,renderer:Object,events:Array<SSASubtitleEvent>}):void,
 *      frame:function(num):void,
 *      getDisplayUri:function():string,
 * }}
 */
var SSARenderer;

/**
 * @type {function(new:SSARenderer)}
 */
sabre.Renderer = function(){}