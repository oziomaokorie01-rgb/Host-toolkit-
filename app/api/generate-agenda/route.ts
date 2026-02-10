import { NextResponse } from 'next/server';
import { generateAgenda } from '@../../../services/aiService';

export async function POST(request: Request) {
  try {
      const body = await request.json();
          
              // Call the service logic
                  const result = await generateAgenda(body);

                      return NextResponse.json(result, { status: 200 });
                        } catch (error) {
                            console.error('Error in generate-agenda API:', error);
                                return NextResponse.json(
                                      { error: 'Failed to generate agenda' },
                                            { status: 500 }
                                                );
                                                  }
                                                  }
