
declare let $;

export class ThemeService {
    constructor() {
        this.switchTheme('theme-1');
    }

    switchTheme(themeName: string) {
        $('body').removeClass().addClass(themeName);
    }

    getCurrentTheme() {
        return $('body').attr('class');
    }
}