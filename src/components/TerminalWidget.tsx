import { useState, useEffect, useRef } from 'react';

interface LogEntry {
  id: number;
  timestamp: string;
  command?: string;
  output?: string;
  type: 'command' | 'output' | 'success' | 'error';
}

const deploymentScenarios = [
  {
    command: 'hexabyte deploy --rag-assistant --live',
    outputs: [
      { text: '[2026-05-05T07:30:01] Initializing vector store...', delay: 800 },
      { text: '[2026-05-05T07:30:03] RAG pipeline connected', delay: 1200 },
      { text: '[2026-05-05T07:30:05] Deployment successful ✓', type: 'success', delay: 1500 },
    ],
  },
  {
    command: 'hexabyte status',
    outputs: [
      { text: 'Systems operational. 3 active deployments.', type: 'output', delay: 600 },
      { text: '> n8n orchestration: running', delay: 400 },
      { text: '> vector store: healthy', delay: 400 },
      { text: '> api gateway: 99.9% uptime', delay: 400 },
    ],
  },
  {
    command: 'hexabyte provision --shopify-automation',
    outputs: [
      { text: '[2026-05-05T14:22:10] Provisioning event-driven architecture...', delay: 1000 },
      { text: '[2026-05-05T14:22:15] Webhook handlers configured', delay: 800 },
      { text: '[2026-05-05T14:22:18] Lambda functions deployed', delay: 600 },
      { text: '[2026-05-05T14:22:20] System live ✓', type: 'success', delay: 1000 },
    ],
  },
];

export default function TerminalWidget() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const logIdRef = useRef(0);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const getTimestamp = () => {
    const now = new Date();
    return now.toISOString().replace('T', ' ').slice(0, 19);
  };

  const runScenario = async (scenarioIndex: number) => {
    const scenario = deploymentScenarios[scenarioIndex];
    setIsTyping(true);
    setTypedCommand('');

    // Type command character by character
    for (let i = 0; i <= scenario.command.length; i++) {
      setTypedCommand(scenario.command.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    setIsTyping(false);

    // Add command to logs
    const commandLog: LogEntry = {
      id: logIdRef.current++,
      timestamp: getTimestamp(),
      command: scenario.command,
      type: 'command',
    };
    setLogs((prev) => [...prev, commandLog]);

    // Execute outputs with delays
    for (const output of scenario.outputs) {
      await new Promise((resolve) => setTimeout(resolve, output.delay));

      const outputLog: LogEntry = {
        id: logIdRef.current++,
        timestamp: getTimestamp(),
        output: output.text,
        type: output.type as 'output' | 'success' | 'error' || 'output',
      };
      setLogs((prev) => [...prev, outputLog]);
      scrollToBottom();
    }

    // Wait before next scenario
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Cycle to next scenario
    setCurrentScenario((prev) => (prev + 1) % deploymentScenarios.length);
  };

  useEffect(() => {
    const init = async () => {
      // Initial delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runScenario(0);
    };
    init();
  }, []);

  useEffect(() => {
    if (currentScenario > 0 || logs.length > 0) {
      runScenario(currentScenario);
    }
  }, [currentScenario]);

  return (
    <div className="terminal w-full max-w-lg">
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">deployments.log</span>
      </div>
      <div
        ref={terminalRef}
        className="terminal-body font-mono text-sm overflow-y-auto max-h-[180px] sm:max-h-[280px]"
      >
        {logs.length === 0 && !isTyping && (
          <div className="text-muted-foreground/50">
            <span className="terminal-prompt">$</span> Waiting for deployment...
          </div>
        )}

        {logs.map((log) => (
          <div key={log.id} className="mb-1">
            {log.type === 'command' && (
              <div>
                <span className="terminal-prompt">$</span>{' '}
                <span className="text-foreground">{log.command}</span>
              </div>
            )}
            {log.type === 'output' && (
              <div className="terminal-text pl-4">{log.output}</div>
            )}
            {log.type === 'success' && (
              <div className="terminal-success pl-4">{log.output}</div>
            )}
            {log.type === 'error' && (
              <div className="text-red-400 pl-4">{log.output}</div>
            )}
          </div>
        ))}

        {isTyping && (
          <div>
            <span className="terminal-prompt">$</span>{' '}
            <span className="text-foreground">{typedCommand}</span>
            <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />
          </div>
        )}

        {!isTyping && logs.length > 0 && (
          <div className="mt-2">
            <span className="terminal-prompt">$</span>
            <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
