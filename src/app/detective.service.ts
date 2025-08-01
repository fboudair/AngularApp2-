import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Makes this service available app-wide without needing to register it in a module
})
export class DetectiveService {

    /**
   * Logs an action with optional additional details.
   * This can be used for debugging, analytics, or tracing user behavior.
   *
   * @param action - A short description of the action being logged.
   * @param details - Optional object containing contextual data for the action.
   */
  logAction(action: string, details: any = null) {
    console.log(`Detective Log: ${action}`, details);
  }
}
