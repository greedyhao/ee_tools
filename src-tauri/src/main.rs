#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use arboard::Clipboard;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, copy_text])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn copy_text(text: &str) {
	let mut clipboard = Clipboard::new().unwrap();
    clipboard.set_text(text.to_string()).unwrap();
}
