/**
 * Aperture Slider
 *
 * jQuery based generic sliding area. Can be used for multi-page forms or slide
 * shows.
 *
 * @author    Rod McNew <rodmcnew@gmail.com>
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */
var ApertureSlider = function (apertureDiv, width, frameCount) {

    var frameSeparation = 100;

    var filmDiv = apertureDiv.children('div');

    var frameDivs = filmDiv.children('div');

    var currentFrame = 0;

    frameDivs.css('float', 'left');
    frameDivs.css('width', width + 'px');
    frameDivs.css('margin-right', frameSeparation + 'px');

    filmDiv.css('width', +(frameCount * (width + frameSeparation)) + 'px');
    filmDiv.css('margin-left: 0');

    apertureDiv.css('width', width + 'px');
    apertureDiv.css('overflow', 'hidden');
    apertureDiv.show();

    this.setCurrentFrame = function (frameIndex) {
        currentFrame = frameIndex;
        this.render();
    }

    this.getCurrentFrame = function () {
        return currentFrame;
    }

    this.goForward = function () {
        if (currentFrame < frameCount - 1) {
            currentFrame += 1
            this.render();
        }
    }

    this.goBack = function () {
        if (currentFrame != 0) {
            currentFrame -= 1;
            this.render();
        }
    }

    this.render = function (callBack) {
        filmDiv.animate(
            {
                'margin-left':-currentFrame * (width + frameSeparation)
            },
            400,
            callBack
        )
    }
}