const vscode = require('vscode');

interface ExtensionContext {
    subscriptions: { dispose(): any }[];
}

interface Disposable {
    dispose(): any;
}

function activate(context: ExtensionContext): void {
    console.log('Extension activated successfully!');
    
    const disposable: Disposable = vscode.commands.registerCommand('codeOptimizer.analyzeFile', function (): void {
        vscode.window.showInformationMessage('Hello from Code Optimizer!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
