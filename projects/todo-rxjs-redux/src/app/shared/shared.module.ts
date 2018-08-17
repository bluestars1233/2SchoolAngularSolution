import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { StatePlaybackComponent } from '.';
import { PlaygroundState } from './app-state.model';
import { Disposer } from './disposer.service';
import { initStateToken, STATE_MACHINE_CONFIG } from './state/state-machine/state.configuration';

export function disposerFactory() { return new Disposer(); }
export function stateFactory() { return new PlaygroundState(); }
export const APP_WIDE_SINGLETON: Provider[] = [{ provide: Disposer, useFactory: disposerFactory },
{ provide: initStateToken, useFactory: stateFactory }, ...STATE_MACHINE_CONFIG];

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatSnackBarModule,
        MatCardModule,
        FlexLayoutModule
    ],
    exports: [CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatCardModule,
        MatCheckboxModule,
        MatListModule,
        HttpClientModule,
        FlexLayoutModule,
        StatePlaybackComponent
    ],
    providers: [Disposer],
    declarations: [StatePlaybackComponent]
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: SharedModule, providers: APP_WIDE_SINGLETON };
    }
}
