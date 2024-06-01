use tauri::Window;

#[tauri::command]
pub fn start_clock(window: Window) {
    window.emit("clock-start", ()).unwrap();
}

#[tauri::command]
pub fn pause_clock(window: Window) {
    window.emit("clock-pause", ()).unwrap();
}

#[tauri::command]
pub fn reset_clock(window: Window) {
    window.emit("clock-reset", ()).unwrap();
}
