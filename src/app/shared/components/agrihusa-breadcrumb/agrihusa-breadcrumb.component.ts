import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

export type IBreadcrumb = {
  nombre: string;
  url?: string;
  active?: boolean;
};

@Component({
    selector: 'agrihusa-breadcrumb',
    templateUrl: 'agrihusa-breadcrumb.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgrihusaBreadcrumbComponent {
    @Input() breadcrumb: IBreadcrumb[] = [];

    constructor() {}

    hasUrl(url: string | undefined): boolean {
        if (typeof url !== 'string') return false;
        return url.trim().length > 0;
    }
}