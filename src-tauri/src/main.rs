// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod clock;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
                        clock::start_clock,
                        clock::pause_clock,
                        clock::reset_clock
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
